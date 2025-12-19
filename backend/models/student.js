class Student {
    constructor(id, name, email, password, studentId, course, year) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password; // In real app, hash this
        this.studentId = studentId;
        this.course = course;
        this.year = year;
        this.createdAt = new Date();
    }
}

module.exports = Student;
