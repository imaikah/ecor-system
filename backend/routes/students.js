const express = require('express');
const fs = require('fs');
const path = require('path');

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

// Get all students (for admin)
router.get('/', (req, res) => {
    const db = readDB();
    res.json(db.students);
});

// Get student by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const db = readDB();
    const student = db.students.find(s => s.id == id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Update student
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const db = readDB();
    const student = db.students.find(s => s.id == id);
    if (student) {
        Object.assign(student, updates);
        writeDB(db);
        res.json({ message: 'Student updated successfully', student });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Delete student
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const db = readDB();
    const index = db.students.findIndex(s => s.id == id);
    if (index !== -1) {
        db.students.splice(index, 1);
        writeDB(db);
        res.json({ message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

module.exports = router;
