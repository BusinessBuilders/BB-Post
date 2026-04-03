# Using Facebook Graph API Explorer to Trigger Green Checkmarks

**This is the OFFICIAL way to make API calls that Facebook's app review system will detect.**

## 🔗 Open the Graph API Explorer

Visit: https://developers.facebook.com/tools/explorer

---

## 🎯 Setup for Instagram Business APIs

### Step 1: Select Your Instagram App

1. Click the **"Meta App"** dropdown (top right)
2. Select your Instagram app: **ID 1382909656613877**

### Step 2: Get Access Token

1. Click **"Generate Access Token"**
2. When prompted, select these permissions:
   - ✅ `instagram_business_basic`
   - ✅ `instagram_business_content_publish`
   - ✅ `instagram_business_manage_comments`
   - ✅ `instagram_business_manage_insights`
3. Click **"Generate Access Token"**
4. Authorize with your **William Donovan** Instagram Business account
5. **Copy the access token** (you'll need it for the calls below)

### Step 3: Get Your Instagram Business Account ID

```
GET Request:
https://graph.instagram.com/v21.0/me?fields=user_id,username,name

Response will show:
{
  "user_id": "YOUR_INSTAGRAM_ID",
  "username": "williamdonovan",
  "name": "William Donovan"
}
```

**Save the `user_id` - you'll use it in the calls below.**

---

## 📸 Test 1: instagram_business_content_publish

### Create and Publish a Post

**Step 1: Create Media Container**

```
POST Request:
https://graph.instagram.com/v21.0/{your-instagram-id}/media

Body (select "POST" method, then click "Add field"):
- image_url: https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0
- caption: Testing for Facebook app review! 🚀 #APITest

Click "Submit"

Response:
{
  "id": "MEDIA_CONTAINER_ID"
}
```

**Step 2: Check Media Status** (wait 30 seconds first)

```
GET Request:
https://graph.instagram.com/v21.0/{MEDIA_CONTAINER_ID}?fields=status_code

Response:
{
  "status_code": "FINISHED"
}
```

**Step 3: Publish the Post**

```
POST Request:
https://graph.instagram.com/v21.0/{your-instagram-id}/media_publish

Body:
- creation_id: {MEDIA_CONTAINER_ID from step 1}

Click "Submit"

Response:
{
  "id": "17899xxxxxx"  ← This is your published post ID
}
```

✅ **This should trigger the `instagram_business_content_publish` checkmark!**

---

## 💬 Test 2: instagram_business_manage_comments

**Use the post ID from Test 1:**

```
POST Request:
https://graph.facebook.com/v21.0/{POST_ID}/comments

Body:
- message: Testing comment management for app review

Click "Submit"

Response:
{
  "id": "COMMENT_ID"
}
```

✅ **This should trigger the `instagram_business_manage_comments` checkmark!**

---

## 📊 Test 3: instagram_business_manage_insights

**Call 1: Account Insights (Follower Count & Reach)**

```
GET Request:
https://graph.instagram.com/v21.0/{your-instagram-id}/insights?metric=follower_count,reach&period=day

Click "Submit"

Response:
{
  "data": [
    {
      "name": "follower_count",
      "values": [
        {
          "value": 1234,
          "end_time": "2026-01-12"
        }
      ]
    },
    {
      "name": "reach",
      "values": [
        {
          "value": 567,
          "end_time": "2026-01-12"
        }
      ]
    }
  ]
}
```

**Call 2: Engagement Insights**

```
GET Request:
https://graph.instagram.com/v21.0/{your-instagram-id}/insights?metric=likes,views,comments,shares,saves,replies&metric_type=total_value&period=day

Click "Submit"

Response:
{
  "data": [
    {
      "name": "likes",
      "total_value": {
        "value": 123
      }
    }
  ]
}
```

✅ **This should trigger the `instagram_business_manage_insights` checkmark!**

---

## 🧵 Setup for Threads APIs

### Step 1: Select Threads App

1. Change **"Meta App"** dropdown to your Threads app: **ID 1618287349523596**
2. Click **"Generate Access Token"**
3. Select these permissions:
   - ✅ `threads_basic`
   - ✅ `threads_content_publish`
   - ✅ `threads_manage_replies`
   - ✅ `threads_manage_insights`
   - ✅ `threads_profile_discovery`

### Step 2: Get Your Threads User ID

```
GET Request:
https://graph.threads.net/v1.0/me?fields=id,username,name

Response:
{
  "id": "YOUR_THREADS_ID",
  "username": "williamdonovan",
  "name": "William Donovan"
}
```

---

## 🧵 Test 4: threads_content_publish

**Step 1: Create Thread**

```
POST Request:
https://graph.threads.net/v1.0/{your-threads-id}/threads

Body (use multipart/form-data):
- media_type: TEXT
- text: Testing Threads API for Facebook app review! 🧵

Click "Submit"

Response:
{
  "id": "CREATION_ID"
}
```

**Step 2: Publish Thread**

```
POST Request:
https://graph.threads.net/v1.0/{your-threads-id}/threads_publish

Body:
- creation_id: {CREATION_ID from step 1}

Click "Submit"

Response:
{
  "id": "THREAD_ID"
}
```

✅ **This should trigger the `threads_content_publish` checkmark!**

---

## 💬 Test 5: threads_manage_replies

**Use the thread ID from Test 4:**

```
POST Request:
https://graph.threads.net/v1.0/{your-threads-id}/threads

Body:
- media_type: TEXT
- text: Testing reply management for app review
- reply_to_id: {THREAD_ID from Test 4}

Click "Submit" → Get REPLY_CREATION_ID

Then publish it:
POST Request:
https://graph.threads.net/v1.0/{your-threads-id}/threads_publish

Body:
- creation_id: {REPLY_CREATION_ID}

Click "Submit"
```

✅ **This should trigger the `threads_manage_replies` checkmark!**

---

## 📊 Test 6: threads_manage_insights

```
GET Request:
https://graph.threads.net/v1.0/{your-threads-id}/threads_insights?metric=views,likes,replies,reposts,quotes&period=day

Click "Submit"

Response:
{
  "data": [
    {
      "name": "views",
      "values": [
        {
          "value": 250,
          "end_time": "2026-01-12"
        }
      ]
    }
  ]
}
```

✅ **This should trigger the `threads_manage_insights` checkmark!**

---

## 🔍 Test 7: threads_profile_discovery

```
GET Request:
https://graph.threads.net/v1.0/profile_lookup?username=zuck

Click "Submit"

Response:
{
  "id": "314216",
  "name": "Mark Zuckerberg",
  "profile_picture_url": "https://..."
}

Try another search:
https://graph.threads.net/v1.0/profile_lookup?username=instagram
```

✅ **This should trigger the `threads_profile_discovery` checkmark!**

---

## 🎥 Screen Recording Tips

When you record your screencast:

1. **Show the Graph API Explorer tab**
2. **Show the app selection dropdown** (proving you're using your app)
3. **Show each API call being submitted**
4. **Show the successful JSON responses**
5. **Switch to Instagram/Threads app** and show the posts appeared
6. **Go back to Facebook App Review page** and show the green checkmarks

---

## ⚡ Quick Checklist

Before you start recording:

- [ ] Graph API Explorer open in one tab
- [ ] Facebook App Review page open in another tab
- [ ] Instagram app open in another tab
- [ ] Threads app open in another tab
- [ ] Screen recorder ready (OBS, QuickTime, or Loom)

Execute all 7 tests in order, then refresh the App Review page to see checkmarks turn green!

---

## 💡 Why This Works

**The Graph API Explorer makes calls FROM Facebook's own servers using your App ID.**

When you click "Submit" in the Explorer:
1. Facebook's server makes the API call
2. Facebook's tracking system sees: "App 1382909656613877 just used instagram_business_content_publish"
3. The checkmark turns green on the App Review page

This is guaranteed to work because it's Facebook's official testing tool.

---

## 🚨 Troubleshooting

**If checkmarks still don't appear:**

1. **Wait 5 minutes** after making calls, then refresh the App Review page
2. **Check you selected the correct app** in the Graph API Explorer dropdown
3. **Verify the access token** shows all permissions when you generate it
4. **Try logging out and back into Facebook** developers portal
5. **Use incognito/private mode** to rule out caching issues

**If you get permission errors:**

- Make sure you authorized with the Instagram Business account (not personal)
- Generate a fresh access token with all permissions checked
- Verify the account is properly set up as Instagram Business (not Creator)

---

Good luck with your app review! 🚀
