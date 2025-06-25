const A = document.getElementById('task-area');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks');

// Add a new task to the list
function addTask(event) {
    event.preventDefault();

    const task = createTask(B.value.trim());
    C.appendChild(task);
    B.value = ''; // Clear the input field
}

// Create a new task element
function createTask(taskName) {
    const task = document.createElement('li');
    task.innerHTML = `
        <input type="checkbox">
        <label>${taskName}</label>
        <span class="delete">&times;</span> 
    `;
    // &times - x symbol for delete

    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener('click', deleteTask);
    return task;
}

// Delete a task
function deleteTask(event) {
    event.target.parentElement.remove();
}
// event.target is the clicked x (delete icon) and parentElement is the li element

A.addEventListener('submit', addTask);