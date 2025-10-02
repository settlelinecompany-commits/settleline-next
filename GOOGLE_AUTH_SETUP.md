# Google OAuth Setup Guide

This guide will help you set up Google Sign-In for your Settleline application using Supabase Auth.

## 🚀 Quick Setup Steps

### 1. Create Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" → "Library"
   - Search for "Google+ API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `https://your-project-ref.supabase.co/auth/v1/callback`
     - `http://localhost:3000/auth/v1/callback` (for development)

### 2. Configure Supabase Auth

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to your project → "Authentication" → "Providers"
3. Find "Google" and click "Enable"
4. Enter your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console
5. Save the configuration

### 3. Update Redirect URLs

Make sure these URLs are added to your Google OAuth configuration:

**Production:**
```
https://your-project-ref.supabase.co/auth/v1/callback
```

**Development:**
```
http://localhost:3000/auth/v1/callback
http://localhost:3002/auth/v1/callback
```

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3002/auth`
3. Click "Continue with Google"
4. Complete the OAuth flow
5. Verify you're redirected to `/dashboard`

## 🔧 Environment Variables

No additional environment variables are needed for Google OAuth - Supabase handles the OAuth flow server-side.

## 🎯 Features Implemented

- ✅ Google Sign-In button on auth page
- ✅ Google Sign-In button in auth modal
- ✅ Automatic redirect after successful authentication
- ✅ Integration with existing user dashboard
- ✅ Proper error handling

## 🚨 Important Notes

1. **Domain Verification**: For production, you may need to verify your domain with Google
2. **OAuth Consent Screen**: Configure your OAuth consent screen in Google Cloud Console
3. **Scopes**: The default scopes include basic profile information (name, email, profile picture)
4. **Rate Limits**: Google has rate limits for OAuth requests

## 🔍 Troubleshooting

### Common Issues:

1. **"redirect_uri_mismatch"**: 
   - Check that your redirect URIs in Google Console match exactly
   - Include both HTTP (dev) and HTTPS (prod) versions

2. **"invalid_client"**:
   - Verify your Client ID and Client Secret are correct
   - Make sure they're copied without extra spaces

3. **"access_denied"**:
   - Check your OAuth consent screen configuration
   - Ensure the app is published or in testing mode with your email added

### Testing Checklist:

- [ ] Google OAuth credentials created
- [ ] Supabase Google provider enabled
- [ ] Redirect URIs configured correctly
- [ ] OAuth consent screen configured
- [ ] Test sign-in flow works
- [ ] User data appears in Supabase Auth dashboard
- [ ] Dashboard redirect works after sign-in

## 📱 User Experience

Users can now:
1. Click "Continue with Google" on any auth page
2. Complete Google OAuth flow
3. Automatically get signed in
4. Access their dashboard with consultation history
5. Use the same Google account for future sign-ins

## 🔐 Security Benefits

- No password storage required
- Google handles security and 2FA
- Reduced friction for user sign-up
- Professional authentication experience
- Automatic account linking for existing users

---

**Need Help?** Check the [Supabase Auth documentation](https://supabase.com/docs/guides/auth) for more details.
