#!/bin/bash
set -e

VERSION=${1:-latest}
REPO="validsyntax/postiz"

# Enable BuildKit for faster builds and cache mounts
export DOCKER_BUILDKIT=1

echo "=========================================="
echo "Building Postiz Docker image v${VERSION}"
echo "Target: docker.io/${REPO}"
echo "=========================================="

# Ensure we have a buildx builder for multi-platform
if ! docker buildx inspect multiarch-builder &>/dev/null; then
    echo "Creating multi-arch builder..."
    docker buildx create --name multiarch-builder --use
fi

docker buildx use multiarch-builder

# Build and push multi-arch image with cache optimization
echo "Building for linux/amd64 and linux/arm64..."
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -f Dockerfile.dev \
  -t ${REPO}:${VERSION} \
  -t ${REPO}:latest \
  --build-arg NEXT_PUBLIC_VERSION=${VERSION} \
  --cache-from type=registry,ref=${REPO}:buildcache \
  --cache-to type=registry,ref=${REPO}:buildcache,mode=max \
  --push \
  .

echo "=========================================="
echo "Done! Image pushed to docker.io/${REPO}:${VERSION}"
echo ""
echo "To deploy on VPS:"
echo "  ssh linuxuser@149.28.121.45 'cd ~/postiz && docker compose pull && docker compose up -d'"
echo "=========================================="
