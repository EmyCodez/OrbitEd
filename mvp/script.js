// Array to hold assignments
let assignments = [];

// Function to add a new assignment
function addAssignment() {
    const assignmentName = document.getElementById("assignmentName").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    // Check if assignment name or due date is empty
    if (assignmentName.trim() === "" || dueDate === "") {
        alert("Please enter both assignment name and due date.");
        return;
    }

    // Create assignment object
    const assignment = {
        name: assignmentName,
        priority: priority,
        dueDate: new Date(dueDate), // Store due date as a Date object
    };

    // Add the assignment to the array
    assignments.push(assignment);

    // Clear the input fields
    document.getElementById("assignmentName").value = "";
    document.getElementById("dueDate").value = "";

    // Update the display
    renderAssignments();
}

// Function to delete an assignment
function deleteAssignment(index) {
    assignments.splice(index, 1);
    renderAssignments();
}

// Function to render assignments on the page
function renderAssignments() {
    const assignmentList = document.getElementById("assignmentList");

    // Clear the list before rendering
    assignmentList.innerHTML = "";

    // Sort assignments by priority
    assignments.sort((a, b) => {
        const priorities = { High: 1, Medium: 2, Low: 3 };
        return priorities[a.priority] - priorities[b.priority];
    });

    // Display assignments
    assignments.forEach((assignment, index) => {
        const li = document.createElement("li");
        li.classList.add(assignment.priority.toLowerCase());

        // Format the due date to display it in a readable format
        const formattedDate = assignment.dueDate.toLocaleDateString();

        li.innerHTML = `
      <span>${assignment.name} (${assignment.priority})</span>
      <span class="due-date">Due: ${formattedDate}</span>
      <button class="delete" onclick="deleteAssignment(${index})">Delete</button>
    `;

        assignmentList.appendChild(li);
    });
}

