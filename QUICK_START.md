# 🚀 Quick Start Guide - eCOR System

## Step 1: Install Dependencies (One-time setup)

Open terminal in the project folder and run:

```bash
cd backend
npm install
```

Wait for installation to complete.

## Step 2: Start the Backend Server

In the same terminal (backend folder):

```bash
npm start
```

You should see: `Server running at http://localhost:3000`

**Keep this terminal running!**

## Step 3: Open the Frontend

Open `frontend/index.html` in your web browser.

Or use VS Code Live Server extension:
- Right-click on `frontend/index.html`
- Select "Open with Live Server"

## Step 4: Test the System

### Test Student Flow:

1. **Register a Student**
   - Click "Register" button
   - Fill in the form:
     - Name: Juan Dela Cruz
     - Student Number: 2024-00001
     - Course: BSIT
     - Year & Section: 1-A
     - Email: juan@student.com
     - Password: password123
   - Click "Register"

2. **Login as Student**
   - Click "Login"
   - Enter email: juan@student.com
   - Enter password: password123
   - Click "Login"

3. **Submit COR Request**
   - Click "Request New COR"
   - Add comments (optional)
   - Click "Submit Request"
   - You'll be redirected to dashboard

4. **View Request Status**
   - Check your dashboard
   - You should see your request with "PENDING" status

### Test Admin Flow:

1. **Logout from Student Account**
   - Click "Logout" button

2. **Login as Admin**
   - Click "Login"
   - Check "Login as Admin" checkbox
   - Email: admin@ptc.edu.ph
   - Password: admin123
   - Click "Login"

3. **View Dashboard**
   - See statistics (1 student, 1 request, etc.)

4. **Manage Requests**
   - Click "Manage Requests"
   - You should see the student's request
   - Click "Approve" button
   - Confirm the approval

5. **Verify Update**
   - Logout from admin
   - Login as student again
   - Check dashboard - status should now be "APPROVED"

## ✅ Success!

Your eCOR system is now fully functional!

## 🔧 Troubleshooting

### Backend won't start?
- Make sure you ran `npm install` in the backend folder
- Check if port 3000 is already in use
- Try: `npm install` again

### Frontend can't connect to backend?
- Make sure backend server is running
- Check console for errors (F12 in browser)
- Verify URL is `http://localhost:3000`

### Login not working?
- Clear browser cache and localStorage
- Check if backend is running
- Verify credentials are correct

## 📱 Features to Try

- ✅ Register multiple students
- ✅ Submit multiple COR requests
- ✅ Approve/reject different requests
- ✅ View all students in admin panel
- ✅ Check real-time updates
- ✅ Test logout functionality

## 🎉 Enjoy your eCOR System!

For detailed documentation, see README.md
