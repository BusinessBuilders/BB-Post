# BB Post API Testing Guide
**Complete Guide for Instagram & Threads API Review Testing**

This guide shows you exactly how to navigate the BB Post app to trigger all API calls needed for Instagram and Threads app review approval.

---

## 📋 Prerequisites

### 1. Start the App
```bash
# In the project directory
pnpm install
pnpm run dev:docker    # Start PostgreSQL & Redis
pnpm run dev           # Start all services
```

**Services will run on:**
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000
- API Docs (Swagger): http://localhost:3000/api

### 2. Environment Variables
Ensure you have in `.env`:
```env
# Instagram
INSTAGRAM_APP_ID=your_instagram_app_id
INSTAGRAM_APP_SECRET=your_instagram_app_secret

# Instagram Standalone
INSTAGRAM_STANDALONE_APP_ID=your_standalone_app_id
INSTAGRAM_STANDALONE_APP_SECRET=your_standalone_app_secret

# Threads
THREADS_APP_ID=your_threads_app_id
THREADS_APP_SECRET=your_threads_app_secret

# Required URLs
FRONTEND_URL=http://localhost:4200
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

---

## 🎯 Testing Flow Overview

```
1. Register Account (Auth API)
2. Connect Instagram (OAuth + All Instagram Permissions)
3. Connect Threads (OAuth + All Threads Permissions)
4. Create Posts (content_publish API)
5. Create Threaded Posts (manage_comments/manage_replies API)
6. View Analytics (manage_insights API)
7. Use @Mentions (profile_discovery API)
```

---

## 1️⃣ Account Registration & Authentication

### Navigate to Registration
**URL:** http://localhost:4200/auth

**Steps:**
1. Open browser to `http://localhost:4200/auth`
2. Fill in registration form:
   - Email: `test@example.com`
   - Password: `SecurePassword123!`
3. Click **"Register"**

**API Calls Triggered:**
```http
POST http://localhost:3000/auth/can-register
POST http://localhost:3000/auth/register
```

**Expected Response:**
- If email verification is enabled: Activation email sent
- If disabled: Auto-logged in with JWT cookie

### Activate Account (if email verification enabled)
**URL:** Check your email for activation link or:
```
http://localhost:4200/auth/activate/{code}
```

**API Call:**
```http
POST http://localhost:3000/auth/activate
Body: { "code": "activation_code_from_email" }
```

### Login
**URL:** http://localhost:4200/auth/login

**Steps:**
1. Enter email and password
2. Click **"Login"**

**API Call:**
```http
POST http://localhost:3000/auth/login
Body: {
  "email": "test@example.com",
  "password": "SecurePassword123!",
  "provider": "LOCAL"
}
```

---

## 2️⃣ Connect Instagram Integration

### Navigate to Integrations
**URL:** http://localhost:4200/settings (or look for "Integrations" or "Channels" menu)

**Steps:**
1. After login, navigate to **Settings** or **Integrations** page
2. Click **"Add Channel"** or **"Connect Platform"**
3. Select **"Instagram (Standalone)"** OR **"Instagram (Facebook Business)"**

### Option A: Instagram Standalone

**Click "Connect Instagram Standalone"**

**API Calls Triggered:**
```http
# Step 1: Get OAuth URL
GET http://localhost:3000/integrations/social/instagram-standalone

# Response:
{
  "url": "https://www.instagram.com/oauth/authorize?client_id=...&scope=instagram_business_basic,instagram_business_content_publish,instagram_business_manage_comments,instagram_business_manage_insights"
}
```

**What Happens:**
1. Redirects to Instagram OAuth
2. Instagram shows permission screen with all 4 permissions:
   - ✅ `instagram_business_basic`
   - ✅ `instagram_business_content_publish`
   - ✅ `instagram_business_manage_comments`
   - ✅ `instagram_business_manage_insights`
3. User authorizes
4. Redirects back to app with code

**Step 2: Complete Connection**
```http
POST http://localhost:3000/integrations/social/instagram-standalone/connect
Body: {
  "code": "auth_code_from_instagram",
  "state": "state_token",
  "timezone": -5
}
```

**Expected Response:**
```json
{
  "id": "integration_id",
  "name": "your_instagram_username",
  "picture": "profile_pic_url"
}
```

### Option B: Instagram via Facebook Business

**Click "Connect Instagram (Facebook Business)"**

**Permissions Requested:**
- `instagram_basic`
- `pages_show_list`
- `pages_read_engagement`
- `business_management`
- `instagram_content_publish`
- `instagram_manage_comments`
- `instagram_manage_insights`

**Flow:**
1. Redirects to Facebook OAuth
2. Shows Meta permission screen
3. User selects Facebook Page linked to Instagram Business account
4. Authorizes all permissions
5. Returns to app
6. App fetches Instagram business account details via Facebook Graph API

---

## 3️⃣ Connect Threads Integration

### Navigate to Add Channel
**URL:** http://localhost:4200/settings

**Steps:**
1. Click **"Add Channel"** or **"Connect Platform"**
2. Select **"Threads"**
3. Click **"Connect"**

**API Call:**
```http
GET http://localhost:3000/integrations/social/threads

# Response:
{
  "url": "https://www.threads.net/oauth/authorize?client_id=...&scope=threads_basic,threads_content_publish,threads_manage_replies,threads_manage_insights,threads_profile_discovery"
}
```

**What Happens:**
1. Redirects to Threads OAuth
2. Threads shows permission screen with all 5 permissions:
   - ✅ `threads_basic`
   - ✅ `threads_content_publish`
   - ✅ `threads_manage_replies`
   - ✅ `threads_manage_insights`
   - ✅ `threads_profile_discovery`
3. User authorizes
4. Redirects back to app

**Complete Connection:**
```http
POST http://localhost:3000/integrations/social/threads/connect
Body: {
  "code": "auth_code_from_threads",
  "state": "state_token",
  "timezone": -5
}
```

---

## 4️⃣ Create Instagram Post (Tests content_publish)

### Navigate to Create Post
**URL:** http://localhost:4200/launches (or main calendar view)

**Steps:**
1. Click **"Create Post"** or **"New Post"** button
2. Select **Instagram** channel from connected channels
3. Fill in post details:
   - **Message:** "Testing Instagram API! 🚀"
   - **Upload Media:** Add 1-3 images or 1 video
   - **Post Type:** Select "Post" or "Story"
4. Click **"Schedule"** or **"Post Now"**

**API Calls Triggered:**

**For Image Post:**
```http
# Step 1: Upload image to Instagram
POST https://graph.instagram.com/v20.0/{instagram_id}/media
Body: {
  image_url: "https://your-cdn.com/image.jpg",
  caption: "Testing Instagram API! 🚀",
  access_token: "{token}"
}

# Step 2: Check processing status
GET https://graph.instagram.com/v20.0/{media_id}?fields=status_code

# Step 3: Publish the post
POST https://graph.instagram.com/v20.0/{instagram_id}/media_publish
Body: {
  creation_id: "{media_id}",
  access_token: "{token}"
}
```

**For Carousel (Multiple Images):**
```http
# Upload each image
POST https://graph.instagram.com/v20.0/{instagram_id}/media (for each image)

# Create carousel container
POST https://graph.instagram.com/v20.0/{instagram_id}/media
Body: {
  media_type: "CAROUSEL",
  children: "media_id_1,media_id_2,media_id_3",
  caption: "Carousel test",
  access_token: "{token}"
}

# Publish carousel
POST https://graph.instagram.com/v20.0/{instagram_id}/media_publish
```

**For Reel (Video):**
```http
POST https://graph.instagram.com/v20.0/{instagram_id}/media
Body: {
  video_url: "https://your-cdn.com/video.mp4",
  media_type: "REELS",
  caption: "Reel test",
  thumb_offset: 0,
  access_token: "{token}"
}
```

**Expected Response:**
```json
{
  "id": "post_id",
  "postId": "instagram_media_id",
  "releaseURL": "https://www.instagram.com/p/ABC123/",
  "status": "success"
}
```

**✅ This tests:** `instagram_business_content_publish`

---

## 5️⃣ Create Threaded Instagram Post (Tests manage_comments)

### Create Multi-Part Post
**URL:** http://localhost:4200/launches

**Steps:**
1. Click **"Create Post"**
2. Select **Instagram** channel
3. Add main post content
4. Click **"Add Comment"** or **"Add Thread"** (look for threading option)
5. Add 2-3 additional messages:
   - Message 1: "Main post content 🎯"
   - Message 2: "Additional details in comment"
   - Message 3: "Learn more at link in bio"
6. Click **"Schedule"**

**API Calls Triggered:**
```http
# Step 1: Publish main post (as shown above)
POST https://graph.facebook.com/v20.0/{instagram_id}/media_publish

# Step 2: Add comment/reply to main post
POST https://graph.facebook.com/v20.0/{post_id}/comments
Body: {
  message: "Additional details in comment",
  access_token: "{token}"
}

# Step 3: Add another comment
POST https://graph.facebook.com/v20.0/{post_id}/comments
Body: {
  message: "Learn more at link in bio",
  access_token: "{token}"
}
```

**Expected Response:**
```json
{
  "id": "comment_id",
  "releaseURL": "https://www.instagram.com/p/ABC123/"
}
```

**✅ This tests:** `instagram_business_manage_comments`

---

## 6️⃣ Create Threads Post (Tests threads_content_publish)

### Navigate to Create Post
**URL:** http://localhost:4200/launches

**Steps:**
1. Click **"Create Post"**
2. Select **Threads** channel
3. Fill in content:
   - **Message:** "Testing Threads API! ✨"
   - **Media:** Optional - add image or video
4. Click **"Post Now"** or **"Schedule"**

**API Calls Triggered:**
```http
# Step 1: Create thread content
POST https://graph.threads.net/v1.0/{user_id}/threads
Body: {
  text: "Testing Threads API! ✨",
  media_type: "TEXT",
  access_token: "{token}"
}

# Step 2: Publish the thread
POST https://graph.threads.net/v1.0/{user_id}/threads_publish
Body: {
  creation_id: "{creation_id}",
  access_token: "{token}"
}
```

**With Image:**
```http
POST https://graph.threads.net/v1.0/{user_id}/threads
Body: {
  image_url: "https://your-cdn.com/image.jpg",
  media_type: "IMAGE",
  text: "Testing with image",
  access_token: "{token}"
}
```

**Expected Response:**
```json
{
  "id": "thread_id",
  "permalink": "https://www.threads.net/@username/post/ABC123"
}
```

**✅ This tests:** `threads_content_publish`

---

## 7️⃣ Create Threaded Threads Post (Tests threads_manage_replies)

### Create Multi-Part Thread
**URL:** http://localhost:4200/launches

**Steps:**
1. Click **"Create Post"**
2. Select **Threads** channel
3. Look for **"Add Thread"** or **"Add Reply"** option
4. Create thread with multiple parts:
   - Part 1: "Here's a thread about API testing 🧵"
   - Part 2: "First, you need to authenticate"
   - Part 3: "Then connect your social accounts"
   - Part 4: "Finally, start posting!"
5. Click **"Schedule"**

**API Calls Triggered:**
```http
# Part 1: Create and publish main thread
POST https://graph.threads.net/v1.0/{user_id}/threads
POST https://graph.threads.net/v1.0/{user_id}/threads_publish

# Part 2: Create reply to Part 1
POST https://graph.threads.net/v1.0/{user_id}/threads
Body: {
  text: "First, you need to authenticate",
  media_type: "TEXT",
  reply_to_id: "{thread_id_from_part_1}",  ← Links to parent
  access_token: "{token}"
}
POST https://graph.threads.net/v1.0/{user_id}/threads_publish

# Part 3: Create reply to Part 2
POST https://graph.threads.net/v1.0/{user_id}/threads
Body: {
  text: "Then connect your social accounts",
  reply_to_id: "{thread_id_from_part_2}",  ← Chains replies
  access_token: "{token}"
}
POST https://graph.threads.net/v1.0/{user_id}/threads_publish

# Part 4: Create reply to Part 3
POST https://graph.threads.net/v1.0/{user_id}/threads
Body: {
  text: "Finally, start posting!",
  reply_to_id: "{thread_id_from_part_3}",
  access_token: "{token}"
}
POST https://graph.threads.net/v1.0/{user_id}/threads_publish
```

**✅ This tests:** `threads_manage_replies`

---

## 8️⃣ View Instagram Analytics (Tests manage_insights)

### Navigate to Analytics Dashboard
**URL:** http://localhost:4200/analytics

**Steps:**
1. Click **"Analytics"** in the main navigation
2. Select **Instagram** channel from dropdown
3. Choose date range (e.g., "Last 7 days", "Last 30 days")
4. View analytics data

**API Calls Triggered:**
```http
# Fetch account-level insights
GET https://graph.instagram.com/v21.0/{instagram_id}/insights
  ?metric=follower_count,reach
  &period=day
  &since={unix_timestamp}
  &until={unix_timestamp}
  &access_token={token}

# Fetch engagement insights
GET https://graph.instagram.com/v21.0/{instagram_id}/insights
  ?metric=likes,views,comments,shares,saves,replies
  &metric_type=total_value
  &period=day
  &since={unix_timestamp}
  &until={unix_timestamp}
  &access_token={token}
```

**Expected Response:**
```json
{
  "data": [
    {
      "name": "follower_count",
      "values": [
        { "value": 1234, "end_time": "2026-01-11" }
      ]
    },
    {
      "name": "reach",
      "values": [
        { "value": 5678, "end_time": "2026-01-11" }
      ]
    },
    {
      "name": "likes",
      "total_value": { "value": 342 }
    }
  ]
}
```

**Analytics Displayed:**
- 📊 **Follower Count** - Total followers over time
- 📈 **Reach** - Accounts reached per day
- ❤️ **Likes** - Total likes
- 👁️ **Views** - Total post views
- 💬 **Comments** - Total comments
- 🔄 **Shares** - Total shares
- 💾 **Saves** - Total saves
- 💭 **Replies** - Total story replies

**✅ This tests:** `instagram_business_manage_insights`

---

## 9️⃣ View Threads Analytics (Tests threads_manage_insights)

### Navigate to Analytics Dashboard
**URL:** http://localhost:4200/analytics

**Steps:**
1. Click **"Analytics"** in navigation
2. Select **Threads** channel
3. Choose date range
4. View metrics

**API Call Triggered:**
```http
GET https://graph.threads.net/v1.0/{user_id}/threads_insights
  ?metric=views,likes,replies,reposts,quotes
  &period=day
  &since={unix_timestamp}
  &until={unix_timestamp}
  &access_token={token}
```

**Expected Response:**
```json
{
  "data": [
    {
      "name": "views",
      "values": [
        { "value": 1250, "end_time": "2026-01-11" }
      ]
    },
    {
      "name": "likes",
      "total_value": { "value": 342 }
    },
    {
      "name": "replies",
      "total_value": { "value": 56 }
    },
    {
      "name": "reposts",
      "total_value": { "value": 23 }
    },
    {
      "name": "quotes",
      "total_value": { "value": 12 }
    }
  ]
}
```

**Analytics Displayed:**
- 👁️ **Views** - Total thread views
- ❤️ **Likes** - Total likes
- 💬 **Replies** - Total replies
- 🔄 **Reposts** - Total reposts
- 💭 **Quotes** - Quote posts

**✅ This tests:** `threads_manage_insights`

---

## 🔟 Use @Mentions in Threads (Tests threads_profile_discovery)

### Create Post with Mention
**URL:** http://localhost:4200/launches

**Steps:**
1. Click **"Create Post"**
2. Select **Threads** channel
3. In the message field, type **"@"**
4. Start typing a username (e.g., "@john")
5. App should show autocomplete dropdown
6. Select a user from the dropdown
7. Complete the message: "Great post by @johnsmith!"
8. Click **"Post"**

**API Call Triggered (when typing @):**
```http
GET https://graph.threads.net/v1.0/profile_lookup
  ?username=john
  &access_token={token}
```

**Expected Response:**
```json
{
  "id": "123456789",
  "name": "John Smith",
  "profile_picture_url": "https://..."
}
```

**App displays in dropdown:**
```
┌─────────────────────────────┐
│ 👤 John Smith (@johnsmith)  │
│ 👤 Johnny (@johnny)         │
│ 👤 John Doe (@johndoe)      │
└─────────────────────────────┘
```

**When Post is Published:**
```http
POST https://graph.threads.net/v1.0/{user_id}/threads
Body: {
  text: "Great post by @johnsmith!",
  media_type: "TEXT",
  access_token: "{token}"
}
```

**✅ This tests:** `threads_profile_discovery`

---

## 📊 API Testing Checklist

Use this checklist to ensure all APIs are tested:

### Instagram Permissions
- [ ] ✅ `instagram_business_content_publish`
  - [ ] Post single image
  - [ ] Post carousel (2-3 images)
  - [ ] Post video/Reel
  - [ ] Post Story
- [ ] ✅ `instagram_business_manage_comments`
  - [ ] Create post with threaded comments
  - [ ] Verify comments appear under post
- [ ] ✅ `instagram_business_manage_insights`
  - [ ] View analytics dashboard
  - [ ] Verify follower count, reach, likes, views, comments

### Threads Permissions
- [ ] ✅ `threads_content_publish`
  - [ ] Post text-only thread
  - [ ] Post thread with image
  - [ ] Post thread with video
- [ ] ✅ `threads_manage_replies`
  - [ ] Create multi-part threaded conversation (3+ replies)
  - [ ] Verify replies chain correctly
- [ ] ✅ `threads_manage_insights`
  - [ ] View Threads analytics
  - [ ] Verify views, likes, replies, reposts, quotes data
- [ ] ✅ `threads_profile_discovery`
  - [ ] Type @ in message
  - [ ] Search for username
  - [ ] Select user from autocomplete
  - [ ] Post with @mention

---

## 🐛 Troubleshooting

### "Invalid OAuth State"
**Cause:** State token expired (5 minutes)
**Solution:** Start OAuth flow again

### "Permission Denied"
**Cause:** User declined permission
**Solution:** Reconnect integration and accept all permissions

### "Instagram Business Account Required"
**Cause:** Personal Instagram account connected
**Solution:** Convert to Business account in Instagram app

### "No Analytics Data"
**Cause:** New account or no posts yet
**Solution:** Create a few posts and wait 24-48 hours for data

### Posts Stuck in "Processing"
**Cause:** Instagram API is processing media
**Solution:** Wait 30-60 seconds, status polls automatically

---

## 📹 Screen Recording Tips for App Review

When recording your app review video:

1. **Show Permission Screens Clearly**
   - Pause on Instagram/Threads OAuth screens
   - Show all permissions being requested
   - Show user accepting permissions

2. **Demonstrate Each API Call**
   - Show the action in the UI
   - Show the result (post URL, analytics, etc.)
   - Verify the data appears correctly

3. **Include All Use Cases**
   - Basic post
   - Multi-image post
   - Threaded post/comments
   - Analytics view
   - @Mention autocomplete

4. **Show Real Data**
   - Use actual Instagram/Threads accounts
   - Show real posts appearing on Instagram/Threads
   - Show real analytics data

---

## 🔗 Useful API Documentation Links

- **Instagram Graph API:** https://developers.facebook.com/docs/instagram-api
- **Threads API:** https://developers.facebook.com/docs/threads
- **Meta App Review:** https://developers.facebook.com/docs/app-review

---

## 📝 Notes for App Review Submission

When submitting for review, explain:

**Why Each Permission is Needed:**

1. **instagram_business_content_publish**
   - "BB Post is a social media scheduling tool. Users need to publish scheduled posts to their Instagram accounts."

2. **instagram_business_manage_comments**
   - "Users can create threaded posts where additional context is added as comments for better engagement."

3. **instagram_business_manage_insights**
   - "Users need to track their post performance (likes, views, reach) to optimize their content strategy."

4. **threads_content_publish**
   - "Users schedule and publish posts to Threads through our platform."

5. **threads_manage_replies**
   - "Users create multi-part threads where each part is a reply to the previous one, creating engaging conversations."

6. **threads_manage_insights**
   - "Users track Threads performance (views, likes, replies) to measure engagement."

7. **threads_profile_discovery**
   - "Users can @mention other Threads users in their posts. We search for profiles to provide autocomplete suggestions."

---

## ✅ Success Criteria

You've successfully tested all APIs when:

1. ✅ You can register and login
2. ✅ You can connect Instagram and see it in your channels list
3. ✅ You can connect Threads and see it in your channels list
4. ✅ You can create and publish an Instagram post → it appears on Instagram
5. ✅ You can create a threaded Instagram post → comments appear under post
6. ✅ You can view Instagram analytics → see follower count, reach, engagement
7. ✅ You can create and publish a Threads post → it appears on Threads
8. ✅ You can create a multi-part Threads thread → replies chain correctly
9. ✅ You can view Threads analytics → see views, likes, replies
10. ✅ You can use @mentions in Threads → autocomplete works

---

**Good luck with your app review! 🚀**

If you need help with any specific API call, check the Swagger docs at http://localhost:3000/api or review the API code in `apps/backend/src/api/routes/`.
