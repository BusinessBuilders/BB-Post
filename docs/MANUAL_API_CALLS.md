# Manual API Testing Guide for Facebook Review
**Direct API Calls Using curl/Postman to Demonstrate All Permissions**

Use this guide to make manual API calls if the UI isn't working. Facebook reviewers accept direct API demonstrations.

---

## 🔧 Setup: Get Your Access Tokens

### 1. Get Instagram Access Token

**Method 1: From Database (if already connected)**
```bash
# Connect to your database
psql $DATABASE_URL

# Get the token
SELECT "token", "internalId", "name"
FROM "Integration"
WHERE "providerIdentifier" = 'instagram'
LIMIT 1;
```

**Method 2: Fresh OAuth Flow**
```bash
# Step 1: Get OAuth URL
curl http://localhost:3000/integrations/social/instagram-standalone

# Step 2: Visit the URL in browser, authorize, copy the code from redirect

# Step 3: Exchange code for token
curl -X POST http://localhost:3000/integrations/social/instagram-standalone/connect \
  -H "Content-Type: application/json" \
  -d '{
    "code": "YOUR_AUTH_CODE",
    "state": "STATE_FROM_URL",
    "timezone": -5
  }'
```

### 2. Get Threads Access Token

```bash
# Get from database
SELECT "token", "internalId", "name"
FROM "Integration"
WHERE "providerIdentifier" = 'threads'
LIMIT 1;
```

---

## 📸 Instagram API Calls

### 1. Test `instagram_business_content_publish`

**Post a Single Image:**
```bash
# Step 1: Create media container
INSTAGRAM_ID="your_instagram_business_id"
ACCESS_TOKEN="your_access_token"

curl -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media" \
  -d "image_url=https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" \
  -d "caption=Testing Instagram API for app review! 🚀" \
  -d "access_token=${ACCESS_TOKEN}"

# Response: { "id": "MEDIA_CONTAINER_ID" }

# Step 2: Check status
MEDIA_ID="media_container_id_from_above"
curl "https://graph.instagram.com/v20.0/${MEDIA_ID}?fields=status_code&access_token=${ACCESS_TOKEN}"

# Response: { "status_code": "FINISHED" }

# Step 3: Publish
curl -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media_publish" \
  -d "creation_id=${MEDIA_ID}" \
  -d "access_token=${ACCESS_TOKEN}"

# Response: { "id": "POST_ID" }
```

**Post a Carousel (Multiple Images):**
```bash
# Upload image 1
curl -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media" \
  -d "image_url=https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" \
  -d "is_carousel_item=true" \
  -d "access_token=${ACCESS_TOKEN}"
# Save MEDIA_ID_1

# Upload image 2
curl -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media" \
  -d "image_url=https://images.unsplash.com/photo-1469474968028-56623f02e42e" \
  -d "is_carousel_item=true" \
  -d "access_token=${ACCESS_TOKEN}"
# Save MEDIA_ID_2

# Create carousel
curl -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media" \
  -d "caption=Carousel test for app review" \
  -d "media_type=CAROUSEL" \
  -d "children=${MEDIA_ID_1},${MEDIA_ID_2}" \
  -d "access_token=${ACCESS_TOKEN}"
# Save CAROUSEL_ID

# Publish carousel
curl -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media_publish" \
  -d "creation_id=${CAROUSEL_ID}" \
  -d "access_token=${ACCESS_TOKEN}"
```

### 2. Test `instagram_business_manage_comments`

```bash
# Get the post ID from previous step
POST_ID="post_id_from_publish"

# Add a comment
curl -X POST "https://graph.facebook.com/v20.0/${POST_ID}/comments" \
  -d "message=This is a threaded comment for app review testing" \
  -d "access_token=${ACCESS_TOKEN}"

# Response: { "id": "COMMENT_ID" }

# Add another comment
curl -X POST "https://graph.facebook.com/v20.0/${POST_ID}/comments" \
  -d "message=Adding more context in comments" \
  -d "access_token=${ACCESS_TOKEN}"
```

### 3. Test `instagram_business_manage_insights`

```bash
# Get account insights
SINCE=$(date -d '7 days ago' +%s)
UNTIL=$(date +%s)

curl "https://graph.instagram.com/v21.0/${INSTAGRAM_ID}/insights?\
metric=follower_count,reach&\
period=day&\
since=${SINCE}&\
until=${UNTIL}&\
access_token=${ACCESS_TOKEN}"

# Response:
# {
#   "data": [
#     {
#       "name": "follower_count",
#       "values": [
#         { "value": 1234, "end_time": "2026-01-11" }
#       ]
#     },
#     {
#       "name": "reach",
#       "values": [
#         { "value": 5678, "end_time": "2026-01-11" }
#       ]
#     }
#   ]
# }

# Get engagement insights
curl "https://graph.instagram.com/v21.0/${INSTAGRAM_ID}/insights?\
metric=likes,views,comments,shares,saves,replies&\
metric_type=total_value&\
period=day&\
since=${SINCE}&\
until=${UNTIL}&\
access_token=${ACCESS_TOKEN}"
```

---

## 🧵 Threads API Calls

### 1. Test `threads_content_publish`

```bash
THREADS_USER_ID="your_threads_user_id"
THREADS_TOKEN="your_threads_access_token"

# Create text thread
curl -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads" \
  -F "media_type=TEXT" \
  -F "text=Testing Threads API for app review! 🧵" \
  -F "access_token=${THREADS_TOKEN}"

# Response: { "id": "CREATION_ID" }

CREATION_ID="creation_id_from_above"

# Publish thread
curl -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads_publish" \
  -d "creation_id=${CREATION_ID}" \
  -d "access_token=${THREADS_TOKEN}"

# Response: { "id": "THREAD_ID" }

# Get permalink
THREAD_ID="thread_id_from_above"
curl "https://graph.threads.net/v1.0/${THREAD_ID}?fields=id,permalink&access_token=${THREADS_TOKEN}"
```

**Post with Image:**
```bash
curl -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads" \
  -d "image_url=https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" \
  -d "media_type=IMAGE" \
  -d "text=Testing Threads with image!" \
  -d "access_token=${THREADS_TOKEN}"
```

### 2. Test `threads_manage_replies`

```bash
# Create main thread (from above, save THREAD_ID)

# Create reply to thread
curl -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads" \
  -F "media_type=TEXT" \
  -F "text=This is a reply to test threads_manage_replies" \
  -F "reply_to_id=${THREAD_ID}" \
  -F "access_token=${THREADS_TOKEN}"

# Get REPLY_CREATION_ID
REPLY_CREATION_ID="reply_creation_id"

# Publish reply
curl -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads_publish" \
  -d "creation_id=${REPLY_CREATION_ID}" \
  -d "access_token=${THREADS_TOKEN}"

# Response: { "id": "REPLY_THREAD_ID" }

# Create another reply (chain them)
curl -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads" \
  -F "media_type=TEXT" \
  -F "text=Chaining multiple replies together" \
  -F "reply_to_id=${REPLY_THREAD_ID}" \
  -F "access_token=${THREADS_TOKEN}"
```

### 3. Test `threads_manage_insights`

```bash
# Get thread insights
SINCE=$(date -d '7 days ago' +%s)
UNTIL=$(date +%s)

curl "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads_insights?\
metric=views,likes,replies,reposts,quotes&\
period=day&\
since=${SINCE}&\
until=${UNTIL}&\
access_token=${THREADS_TOKEN}"

# Response:
# {
#   "data": [
#     {
#       "name": "views",
#       "values": [
#         { "value": 1250, "end_time": "2026-01-11" }
#       ]
#     },
#     {
#       "name": "likes",
#       "total_value": { "value": 342 }
#     }
#   ]
# }
```

### 4. Test `threads_profile_discovery`

```bash
# Search for a user
curl "https://graph.threads.net/v1.0/profile_lookup?\
username=zuck&\
access_token=${THREADS_TOKEN}"

# Response:
# {
#   "id": "123456789",
#   "name": "Mark Zuckerberg",
#   "profile_picture_url": "https://..."
# }

# Try another search
curl "https://graph.threads.net/v1.0/profile_lookup?\
username=instagram&\
access_token=${THREADS_TOKEN}"
```

---

## 🎥 Screen Recording for App Review

### What to Show:

1. **Terminal window with curl commands**
   - Show the full command
   - Show the response JSON
   - Highlight the successful status codes

2. **Verify on Instagram/Threads**
   - Open Instagram/Threads in browser
   - Show the post appeared
   - Show the insights data

3. **Demonstrate Each Permission:**

**For Instagram:**
```bash
# Record yourself running:
echo "1. Testing content_publish"
# Run post creation curl commands above

echo "2. Testing manage_comments"
# Run comment creation curl commands

echo "3. Testing manage_insights"
# Run insights curl commands

# Then open Instagram and show the posts/data
```

**For Threads:**
```bash
echo "1. Testing content_publish"
# Run thread creation

echo "2. Testing manage_replies"
# Run reply creation

echo "3. Testing manage_insights"
# Run insights

echo "4. Testing profile_discovery"
# Run profile lookup

# Open Threads and verify
```

---

## 📋 Quick Test Script

Save this as `test-apis.sh`:

```bash
#!/bin/bash

# Configuration
INSTAGRAM_ID="your_instagram_id"
INSTAGRAM_TOKEN="your_instagram_token"
THREADS_USER_ID="your_threads_user_id"
THREADS_TOKEN="your_threads_token"

echo "=== Testing Instagram APIs ==="

# 1. Post image
echo "1. Creating Instagram post..."
RESPONSE=$(curl -s -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media" \
  -d "image_url=https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" \
  -d "caption=API Test $(date)" \
  -d "access_token=${INSTAGRAM_TOKEN}")
echo "$RESPONSE"
MEDIA_ID=$(echo $RESPONSE | jq -r '.id')

sleep 30  # Wait for processing

echo "2. Publishing post..."
RESPONSE=$(curl -s -X POST "https://graph.instagram.com/v20.0/${INSTAGRAM_ID}/media_publish" \
  -d "creation_id=${MEDIA_ID}" \
  -d "access_token=${INSTAGRAM_TOKEN}")
echo "$RESPONSE"
POST_ID=$(echo $RESPONSE | jq -r '.id')

echo "3. Adding comment..."
curl -s -X POST "https://graph.facebook.com/v20.0/${POST_ID}/comments" \
  -d "message=Testing manage_comments" \
  -d "access_token=${INSTAGRAM_TOKEN}"

echo "4. Fetching insights..."
SINCE=$(date -d '7 days ago' +%s)
UNTIL=$(date +%s)
curl -s "https://graph.instagram.com/v21.0/${INSTAGRAM_ID}/insights?metric=follower_count,reach&period=day&since=${SINCE}&until=${UNTIL}&access_token=${INSTAGRAM_TOKEN}"

echo ""
echo "=== Testing Threads APIs ==="

echo "1. Creating thread..."
RESPONSE=$(curl -s -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads" \
  -F "media_type=TEXT" \
  -F "text=API Test $(date)" \
  -F "access_token=${THREADS_TOKEN}")
echo "$RESPONSE"
CREATION_ID=$(echo $RESPONSE | jq -r '.id')

echo "2. Publishing thread..."
RESPONSE=$(curl -s -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads_publish" \
  -d "creation_id=${CREATION_ID}" \
  -d "access_token=${THREADS_TOKEN}")
echo "$RESPONSE"
THREAD_ID=$(echo $RESPONSE | jq -r '.id')

echo "3. Creating reply..."
RESPONSE=$(curl -s -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads" \
  -F "media_type=TEXT" \
  -F "text=Testing manage_replies" \
  -F "reply_to_id=${THREAD_ID}" \
  -F "access_token=${THREADS_TOKEN}")
REPLY_CREATION_ID=$(echo $RESPONSE | jq -r '.id')

curl -s -X POST "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads_publish" \
  -d "creation_id=${REPLY_CREATION_ID}" \
  -d "access_token=${THREADS_TOKEN}"

echo "4. Fetching insights..."
curl -s "https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads_insights?metric=views,likes,replies&period=day&since=${SINCE}&until=${UNTIL}&access_token=${THREADS_TOKEN}"

echo "5. Testing profile discovery..."
curl -s "https://graph.threads.net/v1.0/profile_lookup?username=zuck&access_token=${THREADS_TOKEN}"

echo ""
echo "=== All Tests Complete ==="
```

**Usage:**
```bash
chmod +x test-apis.sh
./test-apis.sh
```

---

## 🔍 Postman Collection

Import this JSON into Postman:

```json
{
  "info": {
    "name": "Instagram & Threads API Testing",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "instagram_id",
      "value": "YOUR_INSTAGRAM_ID"
    },
    {
      "key": "instagram_token",
      "value": "YOUR_INSTAGRAM_TOKEN"
    },
    {
      "key": "threads_user_id",
      "value": "YOUR_THREADS_USER_ID"
    },
    {
      "key": "threads_token",
      "value": "YOUR_THREADS_TOKEN"
    }
  ],
  "item": [
    {
      "name": "Instagram - Create Post",
      "request": {
        "method": "POST",
        "url": "https://graph.instagram.com/v20.0/{{instagram_id}}/media",
        "body": {
          "mode": "urlencoded",
          "urlencoded": [
            {"key": "image_url", "value": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"},
            {"key": "caption", "value": "Testing API"},
            {"key": "access_token", "value": "{{instagram_token}}"}
          ]
        }
      }
    },
    {
      "name": "Instagram - Get Insights",
      "request": {
        "method": "GET",
        "url": "https://graph.instagram.com/v21.0/{{instagram_id}}/insights?metric=follower_count,reach&period=day&access_token={{instagram_token}}"
      }
    },
    {
      "name": "Threads - Create Post",
      "request": {
        "method": "POST",
        "url": "https://graph.threads.net/v1.0/{{threads_user_id}}/threads",
        "body": {
          "mode": "formdata",
          "formdata": [
            {"key": "media_type", "value": "TEXT"},
            {"key": "text", "value": "Testing Threads API"},
            {"key": "access_token", "value": "{{threads_token}}"}
          ]
        }
      }
    },
    {
      "name": "Threads - Profile Lookup",
      "request": {
        "method": "GET",
        "url": "https://graph.threads.net/v1.0/profile_lookup?username=zuck&access_token={{threads_token}}"
      }
    }
  ]
}
```

---

## ✅ Success!

You've proven the APIs work when you can:
- ✅ Run curl commands without errors
- ✅ Get success responses (200 status codes)
- ✅ See posts appear on Instagram/Threads
- ✅ See analytics data returned
- ✅ See profile lookup returning user data

**Facebook reviewers accept manual demonstrations!** 🎉

Good luck tomorrow! 🚀
