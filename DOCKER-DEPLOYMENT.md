# Docker Deployment Notes

## Port Configuration Differences

### Container Internal Ports
| Service   | Port | Description |
|-----------|------|-------------|
| nginx     | 5000 | Main entry point, routes to backend/frontend |
| backend   | 3100 | NestJS API server |
| frontend  | 4200 | Next.js server |

### Docker Compose Port Mappings
```yaml
ports:
  - '5200:5000'   # nginx (main entry)
  - '3200:3000'   # NOT USED - backend is on 3100, not 3000
```

## Known Issue: nginx.conf Port Mismatch

The file `var/docker/nginx.conf` has a bug where it proxies `/api/` to port 3000, but the backend actually runs on port 3100.

**Current (incorrect):**
```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
}
```

**Should be:**
```nginx
location /api/ {
    proxy_pass http://localhost:3100/;
}
```

### Workaround (without rebuilding)

If deploying the current Docker image, fix nginx inside the running container:

```bash
docker exec <container> sed -i 's/localhost:3000/localhost:3100/' /etc/nginx/nginx.conf
docker exec <container> nginx -s reload
```

## Host Nginx Configuration

When using a reverse proxy on the host to route to the container, route ALL traffic (including `/api/`) through port 5200 (container's nginx). Do NOT strip the `/api/` prefix.

**Correct host nginx config:**
```nginx
server {
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:5200;
        # ... proxy headers
    }

    location /api {
        # NO rewrite - let container nginx handle routing
        proxy_pass http://127.0.0.1:5200;
        # ... proxy headers
    }

    location /uploads/ {
        proxy_pass http://127.0.0.1:5200/uploads/;
        # ... proxy headers
    }
}
```

**Incorrect (causes 502 errors):**
```nginx
location /api {
    rewrite ^/api(.*) $1 break;  # DON'T DO THIS
    proxy_pass http://127.0.0.1:3200;  # Wrong port
}
```

## Environment Variables

Required for the container:
- `BACKEND_INTERNAL_URL`: Set to `http://localhost:3000` (used by frontend SSR, but actual backend is 3100)
- `NEXT_PUBLIC_BACKEND_URL`: Public URL like `https://your-domain.com/api`

## Deployment Checklist

1. Pull/run the Docker image
2. Fix nginx port inside container (if using pre-fix image):
   ```bash
   docker exec postiz sed -i 's/localhost:3000/localhost:3100/' /etc/nginx/nginx.conf
   docker exec postiz nginx -s reload
   ```
3. Configure host nginx to proxy through port 5200
4. Verify API works: `curl https://your-domain.com/api/user/self` should return 401 (not 502)
