function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded roles and passwords
    const users = {
        'admin': 'admin',
        'teacher': 'teacher',
        'student': 'student',
        'parent': 'parent'
    };

    // Hardcoded passwords (for demo purposes only)
    const passwords = {
        'admin': 'admin123',
        'teacher': 'teacher123',
        'student': 'student123',
        'parent': 'parent123'
    };

    // Check if username and password match the hardcoded values
    if (users[username] && passwords[username] === password) {
        const role = users[username];

        // Redirect based on the role
        switch (role) {
            case 'admin':
                window.location.href = "admin.html";  // Admin landing page
                break;
            case 'teacher':
                window.location.href = "teacher.html"; // Teacher landing page
                break;
            case 'student':
                window.location.href = "student.html"; // Student landing page
                break;
            case 'parent':
                window.location.href = "parent.html"; // Parent landing page
                break;
            default:
                alert("Invalid role selected.");
        }
    } else {
        alert("Invalid username or password.");
    }
}
