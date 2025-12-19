// API Base URL
const API_URL = 'http://localhost:3000/api';

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get current user from localStorage
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Save user to localStorage
function saveUser(user, role) {
    localStorage.setItem('currentUser', JSON.stringify({ ...user, role }));
}

// Clear user from localStorage
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/frontend/index.html';
}

// Check if user is logged in
function checkAuth(requiredRole = null) {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = '/frontend/login.html';
        return null;
    }
    if (requiredRole && user.role !== requiredRole) {
        alert('Access denied!');
        window.location.href = '/frontend/index.html';
        return null;
    }
    return user;
}

// ============================================
// REGISTRATION
// ============================================
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            studentId: document.getElementById('studentId').value,
            course: document.getElementById('course').value,
            year: document.getElementById('year').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            const res = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            
            if (res.ok) {
                alert('Registration successful! Please login.');
                window.location.href = '/frontend/login.html';
            } else {
                alert(result.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Connection error. Please make sure the server is running.');
        }
    });
}

// ============================================
// LOGIN
// ============================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const isAdmin = document.getElementById('isAdmin')?.checked || false;

        const endpoint = isAdmin ? `${API_URL}/auth/admin/login` : `${API_URL}/auth/login`;

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const result = await res.json();

            if (res.ok) {
                saveUser(result.user, result.role);
                alert(`Welcome ${result.user.name || result.user.email}!`);
                
                if (result.role === 'admin') {
                    window.location.href = '/frontend/admin-dashboard.html';
                } else {
                    window.location.href = '/frontend/student-dashboard.html';
                }
            } else {
                alert(result.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Connection error. Please make sure the server is running.');
        }
    });
}

// ============================================
// STUDENT DASHBOARD
// ============================================
if (window.location.pathname.includes('student-dashboard.html')) {
    const user = checkAuth('student');
    if (user) {
        // Display user info
        document.getElementById('studentName').textContent = user.name;
        document.getElementById('studentId').textContent = user.studentId;
        document.getElementById('studentEmail').textContent = user.email;
        document.getElementById('studentCourse').textContent = user.course;
        document.getElementById('studentYear').textContent = user.year;

        // Load student requests
        loadStudentRequests(user.id);
    }
}

async function loadStudentRequests(studentId) {
    try {
        const res = await fetch(`${API_URL}/requests/student/${studentId}`);
        const requests = await res.json();

        const tbody = document.getElementById('requestsTableBody');
        tbody.innerHTML = '';

        if (requests.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No requests yet</td></tr>';
            return;
        }

        requests.forEach(req => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${req.id}</td>
                <td>${req.type}</td>
                <td>${new Date(req.submittedAt).toLocaleDateString()}</td>
                <td><span class="status-${req.status}">${req.status.toUpperCase()}</span></td>
                <td>${req.comments || '-'}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading requests:', error);
    }
}

// ============================================
// REQUEST COR
// ============================================
const requestCorForm = document.getElementById('requestCorForm');
if (requestCorForm) {
    const user = checkAuth('student');
    if (user) {
        requestCorForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const data = {
                studentId: user.id,
                type: 'COR',
                comments: document.getElementById('comments').value
            };

            try {
                const res = await fetch(`${API_URL}/requests`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await res.json();

                if (res.ok) {
                    alert('COR request submitted successfully!');
                    window.location.href = '/frontend/student-dashboard.html';
                } else {
                    alert(result.message || 'Request failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Connection error. Please make sure the server is running.');
            }
        });
    }
}

// ============================================
// ADMIN DASHBOARD
// ============================================
if (window.location.pathname.includes('admin-dashboard.html')) {
    const user = checkAuth('admin');
    if (user) {
        loadAdminStats();
    }
}

async function loadAdminStats() {
    try {
        const [studentsRes, requestsRes] = await Promise.all([
            fetch(`${API_URL}/students`),
            fetch(`${API_URL}/requests`)
        ]);

        const students = await studentsRes.json();
        const requests = await requestsRes.json();

        document.getElementById('totalStudents').textContent = students.length;
        document.getElementById('totalRequests').textContent = requests.length;
        document.getElementById('pendingRequests').textContent = 
            requests.filter(r => r.status === 'pending').length;
        document.getElementById('approvedRequests').textContent = 
            requests.filter(r => r.status === 'approved').length;
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// ============================================
// MANAGE STUDENTS
// ============================================
if (window.location.pathname.includes('manage-students.html')) {
    const user = checkAuth('admin');
    if (user) {
        loadAllStudents();
    }
}

async function loadAllStudents() {
    try {
        const res = await fetch(`${API_URL}/students`);
        const students = await res.json();

        const tbody = document.getElementById('studentsTableBody');
        tbody.innerHTML = '';

        if (students.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No students registered</td></tr>';
            return;
        }

        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.studentId}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.year}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading students:', error);
    }
}

// ============================================
// MANAGE REQUESTS
// ============================================
if (window.location.pathname.includes('manage-requests.html')) {
    const user = checkAuth('admin');
    if (user) {
        loadAllRequests();
    }
}

async function loadAllRequests() {
    try {
        const [requestsRes, studentsRes] = await Promise.all([
            fetch(`${API_URL}/requests`),
            fetch(`${API_URL}/students`)
        ]);

        const requests = await requestsRes.json();
        const students = await studentsRes.json();

        const tbody = document.getElementById('requestsTableBody');
        tbody.innerHTML = '';

        if (requests.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No requests yet</td></tr>';
            return;
        }

        requests.forEach(req => {
            const student = students.find(s => s.id === req.studentId);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${req.id}</td>
                <td>${student ? student.name : 'Unknown'}</td>
                <td>${student ? student.studentId : '-'}</td>
                <td>${req.type}</td>
                <td>${new Date(req.submittedAt).toLocaleDateString()}</td>
                <td><span class="status-${req.status}">${req.status.toUpperCase()}</span></td>
                <td>
                    ${req.status === 'pending' ? `
                        <button onclick="updateRequestStatus(${req.id}, 'approved')" class="btn-approve">Approve</button>
                        <button onclick="updateRequestStatus(${req.id}, 'rejected')" class="btn-reject">Reject</button>
                    ` : '-'}
                </td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading requests:', error);
    }
}

async function updateRequestStatus(requestId, status) {
    try {
        const res = await fetch(`${API_URL}/requests/${requestId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });

        const result = await res.json();

        if (res.ok) {
            alert(`Request ${status} successfully!`);
            loadAllRequests(); // Reload table
        } else {
            alert(result.message || 'Update failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Connection error');
    }
}

// ============================================
// LOGOUT BUTTONS
// ============================================
const logoutButtons = document.querySelectorAll('.logout-btn, #logoutBtn');
logoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            logout();
        }
    });
});
