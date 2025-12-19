const express = require('express');
const fs = require('fs');
const path = require('path');
const Student = require('../models/student');

const router = express.Router();
const dbPath = path.join(__dirname, '../db.json');

// Helper to read DB
const readDB = () => {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
};

// Helper to write DB
const writeDB = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Student Register
router.post('/register', (req, res) => {
    const { name, email, password, studentId, course, year } = req.body;
    const db = readDB();
    const existingStudent = db.students.find(s => s.email === email || s.studentId === studentId);
    if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists' });
    }
    const newStudent = new Student(db.students.length + 1, name, email, password, studentId, course, year);
    db.students.push(newStudent);
    writeDB(db);
    res.status(201).json({ message: 'Student registered successfully', user: newStudent });
});

// Student Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const db = readDB();
    const student = db.students.find(s => s.email === email && s.password === password);
    if (student) {
        res.json({ message: 'Login successful', user: student, role: 'student' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Admin Login
router.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    const db = readDB();
    const admin = db.admins.find(a => a.email === email && a.password === password);
    if (admin) {
        res.json({ message: 'Admin login successful', user: admin, role: 'admin' });
    } else {
        res.status(401).json({ message: 'Invalid admin credentials' });
    }
});

module.exports = router;
