# 🚀 eCOR System - Deployment Guide

## Deploy Your eCOR System Online (FREE)

Follow these steps to make your eCOR system accessible to anyone via a public URL.

---

## 📋 Prerequisites

1. **GitHub Account** - Create one at https://github.com/signup (FREE)
2. **Git Installed** - Download from https://git-scm.com/downloads

---

## 🎯 OPTION 1: Deploy to Render.com (RECOMMENDED - Easiest)

### Step 1: Install Git (if not installed)
1. Download Git from: https://git-scm.com/downloads
2. Install with default settings
3. Restart your computer

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `ecor-system`
3. Description: `Electronic Certificate of Registration System`
4. Set to **Public**
5. Click "Create repository"

### Step 3: Upload Your Code to GitHub

Open Command Prompt in your project folder and run:

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - eCOR System"

# Add your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ecor-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Render.com

1. Go to https://render.com and sign up (use GitHub to sign in)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository: `ecor-system`
4. Render will automatically detect `render.yaml`
5. Click "Apply"
6. Wait 5-10 minutes for deployment

### Step 5: Get Your Public URLs

After deployment, you'll get TWO URLs:
- **Backend API**: `https://ecor-backend.onrender.com`
- **Frontend**: `https://ecor-frontend.onrender.com`

### Step 6: Update Frontend API URL

You need to update the frontend to use the deployed backend URL:

1. Open `frontend/js/main.js`
2. Change line 2 from:
   ```javascript
   const API_URL = 'http://localhost:3000/api';
   ```
   To:
   ```javascript
   const API_URL = 'https://ecor-backend.onrender.com/api';
   ```
3. Save the file
4. Commit and push changes:
   ```bash
   git add frontend/js/main.js
   git commit -m "Update API URL for production"
   git push
   ```

### Step 7: Access Your Live Website

Your eCOR system is now live at:
**https://ecor-frontend.onrender.com**

Share this URL with anyone! 🎉

---

## 🎯 OPTION 2: Deploy to Railway.app (Alternative)

### Step 1-3: Same as Option 1 (Create GitHub repo and push code)

### Step 4: Deploy to Railway

1. Go to https://railway.app and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `ecor-system` repository
4. Railway will auto-detect and deploy

### Step 5: Configure Services

1. Click on your project
2. You'll see the backend service deployed
3. Click "Settings" → "Generate Domain" to get public URL
4. Copy the URL (e.g., `https://ecor-system.up.railway.app`)

### Step 6: Update Frontend

Same as Option 1, Step 6 - update the API_URL in `frontend/js/main.js`

---

## 🎯 OPTION 3: Deploy to Vercel + Render (Professional Setup)

### Backend on Render:
1. Follow Option 1, Steps 1-3
2. On Render.com, create "New Web Service"
3. Connect GitHub repo
4. Settings:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: `backend`
5. Deploy and get backend URL

### Frontend on Vercel:
1. Go to https://vercel.com and sign up with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Settings:
   - **Framework Preset**: Other
   - **Root Directory**: `frontend`
5. Before deploying, update `frontend/js/main.js` with backend URL
6. Deploy

---

## 🔧 Important Notes

### Free Tier Limitations:
- **Render.com**: Services sleep after 15 minutes of inactivity (first request takes ~30 seconds to wake up)
- **Railway.app**: 500 hours/month free
- **Vercel**: Unlimited for static sites

### Database:
- Currently using `db.json` (file-based)
- Data persists on Render but resets on service restart
- For production, consider upgrading to MongoDB Atlas (free tier available)

### Custom Domain (Optional):
- You can add your own domain (e.g., ecor.yourschool.edu.ph)
- Configure in your hosting provider's settings

---

## 📱 Testing Your Deployed Site

1. Open your frontend URL in browser
2. Register a new student account
3. Login and submit a COR request
4. Logout and login as admin:
   - Email: `admin@ptc.edu.ph`
   - Password: `admin123`
5. Approve the request
6. Logout and login as student again
7. Verify the request is approved

---

## 🆘 Troubleshooting

### "Cannot connect to backend"
- Check if backend URL is correct in `frontend/js/main.js`
- Verify backend service is running on Render/Railway
- Check browser console for errors (F12)

### "Service Unavailable"
- Free tier services sleep after inactivity
- Wait 30 seconds and refresh
- First request wakes up the service

### "CORS Error"
- Backend already has CORS enabled
- If issue persists, check backend logs

---

## 🎊 Success!

Once deployed, your eCOR system will be accessible 24/7 from anywhere in the world!

**Share your URL with:**
- Students (for registration and COR requests)
- Administrators (for managing requests)
- Anyone who needs access

---

## 📞 Need Help?

If you encounter issues:
1. Check the service logs on Render/Railway
2. Verify all environment variables are set
3. Ensure GitHub repository is up to date
4. Check that API URL in frontend matches backend URL

---

**Deployment prepared by:** BLACKBOXAI
**Last updated:** December 19, 2025
