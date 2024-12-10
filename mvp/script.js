// Hardcoded user credentials and their roles
const users = {
    admin: { username: "admin", password: "admin123", role: "Admin" },
    teacher: { username: "teacher", password: "teacher123", role: "Teacher" },
    student: { username: "student", password: "student123", role: "Student" },
    parent: { username: "parent", password: "parent123", role: "Parent" }
};

function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if the entered username and password match any user
    for (let user in users) {
        if (users[user].username === username && users[user].password === password) {
            // Successful login, redirect based on role
            redirectToDashboard(users[user].role);
            return;
        }
    }

    // If no match found, show error message
    errorMessage.textContent = "Invalid username or password";
}

function redirectToDashboard(role) {
    switch(role) {
        case "Admin":
            window.location.href = "admin.html";
            break;
        case "Teacher":
            window.location.href = "teacher.html";
            break;
        case "Student":
            window.location.href = "student.html";
            break;
        case "Parent":
            window.location.href = "parent.html";
            break;
        default:
            alert("Unknown role");
    }
}
