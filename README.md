# eCOR System - Electronic Certificate of Registration

A complete web-based system for managing Certificate of Registration (COR) requests at Pateros Technological College.

## 🌟 Features

### For Students
- ✅ Register and create account
- ✅ Login to personal dashboard
- ✅ Submit COR requests
- ✅ Track request status in real-time
- ✅ View request history

### For Administrators
- ✅ Login to admin dashboard
- ✅ View all registered students
- ✅ Manage COR requests
- ✅ Approve or reject requests
- ✅ View system statistics

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Web browser (Chrome, Firefox, Edge, etc.)

### Installation

1. **Clone or download the repository**
   ```bash
   cd eCOR
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```
   
   The server will run at `http://localhost:3000`

4. **Open the frontend**
   - Open `frontend/index.html` in your web browser
   - Or use a local server like Live Server (VS Code extension)

## 📖 How to Use

### For Students

1. **Register**
   - Go to the homepage
   - Click "Register"
   - Fill in your details:
     - Full Name
     - Student Number
     - Course
     - Year & Section
     - Email
     - Password
   - Click "Register"

2. **Login**
   - Click "Login" from homepage
   - Enter your email and password
   - Click "Login"

3. **Request COR**
   - From your dashboard, click "Request New COR"
   - Add any comments (optional)
   - Click "Submit Request"

4. **Track Requests**
   - View all your requests on your dashboard
   - Check status: Pending, Approved, or Rejected

5. **Logout**
   - Click "Logout" to return to homepage

### For Administrators

1. **Login**
   - Click "Login" from homepage
   - Check "Login as Admin"
   - Enter credentials:
     - Email: `admin@ptc.edu.ph`
     - Password: `admin123`
   - Click "Login"

2. **View Dashboard**
   - See statistics:
     - Total Students
     - Total Requests
     - Pending Requests
     - Approved Requests

3. **Manage Students**
   - Click "Manage Students"
   - View all registered students

4. **Manage Requests**
   - Click "Manage Requests"
   - View all COR requests
   - Click "Approve" to approve a request
   - Click "Reject" to reject a request
   - Changes reflect immediately in student dashboards

5. **Logout**
   - Click "Logout" to return to homepage

## 🎨 Design Theme

The system uses a consistent green olive theme inspired by nature and education:
- Primary Color: Dark Olive Green (#556b2f)
- Secondary Color: Light Green (#8fbc8f)
- Clean, modern, and responsive design
- Smooth animations and transitions

## 🔐 Default Credentials

### Admin Account
- Email: `admin@ptc.edu.ph`
- Password: `admin123`

### Student Accounts
Students must register through the system to create their accounts.

## 📁 Project Structure

```
eCOR/
├── backend/
│   ├── models/
│   │   ├── student.js          # Student data model
│   │   └── request.js          # Request data model
│   ├── routes/
│   │   ├── auth.js             # Authentication routes
│   │   ├── students.js         # Student CRUD routes
│   │   └── requests.js         # Request CRUD routes
│   ├── app.js                  # Express server setup
│   ├── db.json                 # JSON database
│   └── package.json            # Dependencies
│
├── frontend/
│   ├── js/
│   │   └── main.js             # Frontend JavaScript
│   ├── index.html              # Homepage
│   ├── login.html              # Login page
│   ├── register.html           # Registration page
│   ├── student-dashboard.html  # Student dashboard
│   ├── request-cor.html        # COR request form
│   ├── admin-dashboard.html    # Admin dashboard
│   ├── manage-students.html    # Student management
│   └── manage-requests.html    # Request management
│
├── README.md                   # This file
└── TODO.md                     # Development progress
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new student
- `POST /api/auth/login` - Student login
- `POST /api/auth/admin/login` - Admin login

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Requests
- `GET /api/requests` - Get all requests
- `GET /api/requests/student/:studentId` - Get requests by student
- `POST /api/requests` - Create new request
- `PUT /api/requests/:id` - Update request status
- `DELETE /api/requests/:id` - Delete request

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- JSON file-based database

### Frontend
- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- Fetch API for HTTP requests

## 📝 Notes

- The system uses localStorage for session management
- All data is stored in `backend/db.json`
- Real-time updates between student and admin dashboards
- Responsive design works on desktop and mobile devices

## 🔄 Workflow

1. Student registers → Account created in database
2. Student logs in → Session stored in localStorage
3. Student submits COR request → Request appears in admin dashboard
4. Admin reviews request → Approves or rejects
5. Status updates → Immediately visible in student dashboard
6. Student can track all requests in real-time

## 🎓 About

Developed for Pateros Technological College to streamline the Certificate of Registration request and approval process.

## 📞 Support

For issues or questions, please contact the system administrator.

---

**© 2025 Pateros Technological College. All rights reserved.**
