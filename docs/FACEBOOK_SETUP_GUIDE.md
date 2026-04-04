# Facebook Integration Setup Guide for Postiz

## Overview
This guide documents the complete process to connect Facebook Pages to Postiz for social media scheduling.

---

## Prerequisites
- A Facebook account
- A Facebook Page (Business Page) that you manage
- Postiz deployed and running

---

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Select **"Business"** as the app type
4. Fill in:
   - App name: `postiz` (or your preferred name)
   - Contact email: your email
5. Click **"Create App"**

---

## Step 2: Get App Credentials

1. In your Facebook App Dashboard, go to **"App Settings"** → **"Basic"**
2. Copy:
   - **App ID**: `870744462007854` (example)
   - **App Secret**: Click "Show" and copy the secret

---

## Step 3: Add Facebook Login Product (CRITICAL)

**Important**: You need the regular **"Facebook Login"** product, NOT just "Facebook Login for Business".

1. In the left sidebar, click **"Add Product"**
2. Find **"Facebook Login"** and click **"Set Up"**
3. Choose **"Web"**

### Configure Facebook Login Settings:
1. Go to **"Facebook Login"** → **"Settings"**
2. Enable:
   - ✅ Client OAuth Login
   - ✅ Web OAuth Login
3. Add **Valid OAuth Redirect URIs**:
   ```
   https://your-domain.com/integrations/social/facebook
   ```
   Example: `https://social.business-builder.online/integrations/social/facebook`

4. Click **"Save Changes"**

---

## Step 4: Configure App Domains

1. Go to **"App Settings"** → **"Basic"**
2. Scroll to **"App Domains"**
3. Add your domain: `social.business-builder.online` (without https://)
4. Click **"Save Changes"**

---

## Step 5: Set Up Use Cases & Permissions

1. In the left sidebar, click **"Use Cases"**
2. Click **"Customize"** next to **"Manage everything on your Page"**
3. Go to the **"Permissions"** tab
4. Ensure these permissions are **"Ready for testing"**:
   - `pages_show_list` - Required to list your pages
   - `pages_manage_posts` - Required to create posts
   - `pages_manage_engagement` - Required to manage engagement
   - `pages_read_engagement` - Required to read engagement
   - `business_management` - Required for business features
   - `read_insights` - Required for analytics

---

## Step 6: Add Yourself as Admin/Tester

Since the app is in **Development Mode**, only admins and testers can use it.

1. Go to **"App Roles"** → **"Roles"**
2. You should already be listed as **Administrator**
3. If connecting other Facebook accounts, add them as **Testers**

---

## Step 7: Configure Postiz Environment

Add these variables to your Postiz docker-compose.yml or .env file:

```yaml
environment:
  FACEBOOK_APP_ID: '870744462007854'
  FACEBOOK_APP_SECRET: 'your-app-secret-here'
```

Restart Postiz after adding the credentials:
```bash
docker compose restart
```

---

## Step 8: Connect Facebook in Postiz

1. Go to your Postiz instance (e.g., https://social.business-builder.online)
2. Navigate to **Launches** or **Integrations**
3. Click **"Add Channel"** → **"Facebook"**
4. In the Facebook OAuth popup:
   - **Select your Facebook Page** (check the checkbox next to it)
   - Grant all requested permissions
5. Click **"Continue"**
6. Back in Postiz, select your Page from the list
7. Click **"Save"**

---

## Troubleshooting

### Error: "Could not add channel" or "We couldn't find any business connected"
**Cause**: The `/me/accounts` API is not returning your pages.

**Solutions**:
1. Make sure you selected your Facebook Page during OAuth
2. Ensure `pages_show_list` permission is enabled
3. Verify you're an admin of the Facebook Page

### Error: "TypeError: Cannot read properties of undefined (reading 'filter')"
**Cause**: Facebook API is returning an error instead of permissions data.

**Solutions**:
1. Add regular **"Facebook Login"** product (not just "Facebook Login for Business")
2. Configure Valid OAuth Redirect URIs correctly
3. Ensure all required permissions are "Ready for testing"

### Error: "Invalid Scopes"
**Cause**: The app is requesting permissions that aren't configured.

**Solutions**:
1. Go to **"Use Cases"** → **"Manage everything on your Page"**
2. Enable all required permissions in the Permissions tab
3. Make sure your Facebook account is an admin/tester of the app

### Error: "Can't load URL"
**Cause**: Domain not added to app settings.

**Solutions**:
1. Go to **"App Settings"** → **"Basic"**
2. Add your domain to **"App Domains"**
3. Add redirect URI to **"Facebook Login"** → **"Settings"**

---

## Key Differences: Facebook Login vs Facebook Login for Business

| Feature | Facebook Login | Facebook Login for Business |
|---------|---------------|----------------------------|
| OAuth Flow | Standard OAuth 2.0 | System User tokens |
| Required For | Postiz | Enterprise apps |
| Permissions | User-granted | Business-granted |

**Postiz requires regular "Facebook Login"**, not "Facebook Login for Business".

---

## Required Redirect URI

```
https://your-domain.com/integrations/social/facebook
```

This is constructed as: `${FRONTEND_URL}/integrations/social/facebook`

---

## Summary Checklist

- [ ] Created Facebook App
- [ ] Got App ID and App Secret
- [ ] Added **"Facebook Login"** product (not just for Business)
- [ ] Configured Valid OAuth Redirect URIs
- [ ] Added domain to App Domains
- [ ] Enabled required permissions in Use Cases
- [ ] Added self as Admin (automatic) or Tester
- [ ] Added credentials to Postiz environment
- [ ] Restarted Postiz
- [ ] Connected Facebook and selected Page during OAuth

---

## Environment Variables Reference

```env
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret
```

---

*Document created: December 21, 2025*
*Based on successful Facebook integration with Postiz*
