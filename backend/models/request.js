class Request {
    constructor(id, studentId, type, status, submittedAt, approvedAt, comments) {
        this.id = id;
        this.studentId = studentId;
        this.type = type; // e.g., 'COR'
        this.status = status; // 'pending', 'approved', 'rejected'
        this.submittedAt = submittedAt || new Date();
        this.approvedAt = approvedAt || null;
        this.comments = comments || '';
    }
}

module.exports = Request;
