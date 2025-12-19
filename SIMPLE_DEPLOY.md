# 🚀 SIMPLENG DEPLOYMENT GUIDE (Tagalog)

## Paano I-deploy ang eCOR System Online (LIBRE!)

### Kailangan Mo Lang:
1. GitHub account (libre - gawa sa https://github.com/signup)
2. 10-15 minutes ng oras

---

## 📝 STEP-BY-STEP (Madali Lang!)

### STEP 1: Install Git
1. Download Git: https://git-scm.com/downloads
2. I-install (lahat default settings lang)
3. I-restart ang computer

### STEP 2: Gumawa ng GitHub Account
1. Punta sa https://github.com/signup
2. Mag-sign up (libre lang)
3. Verify email mo

### STEP 3: I-upload ang Code sa GitHub

Buksan ang **Command Prompt** sa folder ng eCOR:
- Right-click sa folder → "Open in Terminal" o "Command Prompt"

Tapos i-type ito ONE BY ONE:

```bash
git init
```
(Press Enter)

```bash
git add .
```
(Press Enter)

```bash
git commit -m "eCOR System"
```
(Press Enter)

Ngayon, punta sa GitHub:
1. Click "+" sa taas → "New repository"
2. Repository name: `ecor-system`
3. Public
4. Click "Create repository"

Makikita mo ang page na may instructions. Hanapin yung part na:
```
git remote add origin https://github.com/YOUR_USERNAME/ecor-system.git
```

I-copy yung EXACT command (with YOUR username) at i-paste sa Command Prompt, then Enter.

Tapos i-type:
```bash
git push -u origin main
```
(Press Enter)

✅ Nasa GitHub na ang code mo!

---

### STEP 4: I-deploy sa Render.com (LIBRE!)

1. Punta sa https://render.com
2. Click "Get Started for Free"
3. Sign up using GitHub (click "GitHub" button)
4. Authorize Render to access GitHub
5. Sa dashboard, click "New +" → "Blueprint"
6. Click "Connect GitHub"
7. Hanapin at i-select ang `ecor-system` repository
8. Click "Connect"
9. Render will detect `render.yaml` automatically
10. Click "Apply"
11. **MAGHINTAY ng 5-10 minutes** (mag-deploy na siya)

---

### STEP 5: Kunin ang URL

Pagkatapos mag-deploy:
1. Makikita mo ang 2 services:
   - `ecor-backend` - ito yung API
   - `ecor-frontend` - ito yung website

2. Click sa `ecor-backend`
3. Sa taas, makikita mo ang URL (example: `https://ecor-backend.onrender.com`)
4. **I-COPY** ang URL na yan

---

### STEP 6: I-update ang Frontend

IMPORTANTE TO! Kailangan i-update para gumana:

1. Bumalik sa VSCode
2. Buksan ang file: `frontend/js/main.js`
3. Sa line 2, hanapin ito:
   ```javascript
   const API_URL = 'http://localhost:3000/api';
   ```

4. Palitan ng (gamitin ang URL na na-copy mo):
   ```javascript
   const API_URL = 'https://ecor-backend.onrender.com/api';
   ```
   ⚠️ IMPORTANTE: Lagyan ng `/api` sa dulo!

5. Save ang file (Ctrl+S)

6. Bumalik sa Command Prompt at i-type:
   ```bash
   git add frontend/js/main.js
   git commit -m "Update API URL"
   git push
   ```

7. Maghintay ng 2-3 minutes, mag-redeploy automatically

---

### STEP 7: TAPOS NA! 🎉

Punta sa:
**https://ecor-frontend.onrender.com**

Yan na ang PUBLIC URL ng eCOR system mo!

Pwede mo na i-share sa:
- Students
- Admin
- Kahit sino!

---

## 🎯 Paano Gamitin:

### Para sa Students:
1. Punta sa URL
2. Click "Register"
3. Fill up form
4. Login
5. Request COR

### Para sa Admin:
1. Punta sa URL
2. Click "Login"
3. Check "Login as Admin"
4. Email: `admin@ptc.edu.ph`
5. Password: `admin123`
6. Approve/Reject requests

---

## ⚠️ IMPORTANTE:

### Free Tier Limitations:
- Pag walang gumagamit ng 15 minutes, matutulog ang service
- First request pagkatapos matulog: 30 seconds bago mag-load
- Normal na yan sa free tier
- Pag may nag-access, mabilis na ulit

### Pag May Error:
1. Check kung tama ang API URL sa `frontend/js/main.js`
2. Verify na running ang backend sa Render
3. Refresh ang page
4. Clear browser cache (Ctrl+Shift+Delete)

---

## 🔄 Pag May Binago Ka sa Code:

```bash
git add .
git commit -m "Describe changes here"
git push
```

Automatic mag-redeploy sa Render!

---

## 💡 Tips:

1. **Bookmark** ang Render dashboard mo
2. **I-save** ang backend at frontend URLs
3. **I-share** ang frontend URL sa lahat
4. **Huwag i-share** ang admin password publicly

---

## 🎊 CONGRATULATIONS!

Ang eCOR system mo ay:
- ✅ Online na
- ✅ Accessible kahit saan
- ✅ Libre
- ✅ 24/7 available

**Share mo na ang link!** 🚀

---

**Questions?** Check ang DEPLOYMENT_GUIDE.md para sa detailed instructions.
