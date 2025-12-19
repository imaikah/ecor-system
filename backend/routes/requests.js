const express = require('express');
const fs = require('fs');
const path = require('path');
const Request = require('../models/request');

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

// Get all requests (for admin)
router.get('/', (req, res) => {
    const db = readDB();
    res.json(db.requests);
});

// Get requests by student ID
router.get('/student/:studentId', (req, res) => {
    const { studentId } = req.params;
    const db = readDB();
    const studentRequests = db.requests.filter(r => r.studentId == studentId);
    res.json(studentRequests);
});

// Create new request
router.post('/', (req, res) => {
    const { studentId, type, comments } = req.body;
    const db = readDB();
    
    const newRequest = new Request(
        db.requests.length + 1,
        studentId,
        type || 'COR',
        'pending',
        new Date(),
        null,
        comments || ''
    );
    
    db.requests.push(newRequest);
    writeDB(db);
    res.status(201).json({ message: 'Request submitted successfully', request: newRequest });
});

// Update request status (for admin)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { status, comments } = req.body;
    const db = readDB();
    
    const request = db.requests.find(r => r.id == id);
    if (request) {
        request.status = status;
        if (comments) request.comments = comments;
        if (status === 'approved' || status === 'rejected') {
            request.approvedAt = new Date();
        }
        writeDB(db);
        res.json({ message: 'Request updated successfully', request });
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
});

// Delete request
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const db = readDB();
    const index = db.requests.findIndex(r => r.id == id);
    
    if (index !== -1) {
        db.requests.splice(index, 1);
        writeDB(db);
        res.json({ message: 'Request deleted successfully' });
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
});

module.exports = router;
