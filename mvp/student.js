// Function to add an assignment to the table
function addAssignment() {
    // Create a new row with input fields for Subject, Assignment Name, Priority, and Due Date
    const table = document.getElementById("assignmentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells for each field (Subject, Assignment Name, Priority, Due Date, Actions)
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    // Add input fields for Subject and Assignment Name
    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.placeholder = "Enter Subject";
    cell1.appendChild(subjectInput);

    const assignmentInput = document.createElement("input");
    assignmentInput.type = "text";
    assignmentInput.placeholder = "Enter Assignment Name";
    cell2.appendChild(assignmentInput);

    // Add Priority dropdown
    const prioritySelect = document.createElement("select");
    const lowOption = document.createElement("option");
    lowOption.value = "low";
    lowOption.text = "Low";
    const mediumOption = document.createElement("option");
    mediumOption.value = "medium";
    mediumOption.text = "Medium";
    const highOption = document.createElement("option");
    highOption.value = "high";
    highOption.text = "High";
    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);
    cell3.appendChild(prioritySelect);

    // Add Due Date picker
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    cell4.appendChild(dueDateInput);

    // Add Remove button in the last cell
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };
    cell5.appendChild(removeButton);
}

// Function to remove all assignments
function removeAllAssignments() {
    const table = document.getElementById("assignmentTable");
    const rows = table.getElementsByTagName("tbody")[0].rows;
    
    while (rows.length > 0) {
        table.deleteRow(1); // Delete the first row
    }
}


