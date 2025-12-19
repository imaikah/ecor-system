// Simple interactive functions for eCOR system

// Show alert on form submit (placeholder)
function formSubmitAlert(event, message) {
    event.preventDefault();
    alert(message);
}

// Example: Contact Form
const contactForm = document.querySelector('form#contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        formSubmitAlert(e, "Message sent successfully!");
        contactForm.reset();
    });
}

// Example: COR Request Form
const corForm = document.querySelector('form#corForm');
if(corForm){
    corForm.addEventListener('submit', function(e){
        formSubmitAlert(e, "COR request submitted successfully!");
        corForm.reset();
    });
}

// Example: Login Form
const loginForm = document.querySelector('form#loginForm');
if(loginForm){
    loginForm.addEventListener('submit', function(e){
        formSubmitAlert(e, "Logged in successfully!");
        // Redirect to dashboard (placeholder)
        window.location.href = "student/dashboard.html";
    });
}

// Example: Register Form
const registerForm = document.querySelector('form#registerForm');
if(registerForm){
    registerForm.addEventListener('submit', function(e){
        formSubmitAlert(e, "Registration successful!");
        window.location.href = "student/dashboard.html";
    });
}

// Register form
if(registerForm){
    registerForm.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.querySelector('#registerForm #username').value;
        const password = document.querySelector('#registerForm #password').value;

        // Save to localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({username, password});
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "login.html";
    });
}

// Login form
if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.querySelector('#loginForm #username').value;
        const password = document.querySelector('#loginForm #password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if(user){
            alert("Logged in successfully!");
            window.location.href = "student/dashboard.html";
        } else {
            alert("Invalid username or password!");
        }
    });
}

