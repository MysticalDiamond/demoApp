document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskItem.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }
});

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
