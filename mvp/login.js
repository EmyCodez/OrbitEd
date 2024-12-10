// login.js

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Mock user data for validation (you can replace this with actual data from a database or API)
    const users = {
        "admin@example.com": { password: "admin123", role: "Admin" },
        "teacher@example.com": { password: "teacher123", role: "Teacher" },
        "student@example.com": { password: "student123", role: "Student" },
        "parent@example.com": { password: "parent123", role: "Parent" }
    };

    // Validate the credentials
    if (users[username] && users[username].password === password && users[username].role === role) {
        // Redirect based on the user's role
        redirectToDashboard(role);
    } else {
        alert("Invalid username, password, or role. Please try again.");
    }
}

function redirectToDashboard(role) {
    // Redirect the user based on the selected role
    switch (role) {
        case "Admin":
            window.location.href = "admin.html"; // Admin Dashboard
            break;
        case "Teacher":
            window.location.href = "teacher.html"; // Teacher Dashboard
            break;
        case "Student":
            window.location.href = "student.html"; // Student Dashboard
            break;
        case "Parent":
            window.location.href = "parent.html"; // Parent Dashboard
            break;
        default:
            alert("Invalid role. Please select a valid role.");
    }
}


