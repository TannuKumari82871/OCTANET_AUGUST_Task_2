// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        taskItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        taskItem.appendChild(deleteButton);

        const markedButton = document.createElement('button');
        markedButton.textContent = 'Marked';
        markedButton.classList.add('marked');
        taskItem.appendChild(markedButton);



        taskList.appendChild(taskItem);

        // Toggle task completion when the task item is clicked
        taskItem.addEventListener('click', () => toggleComplete(taskItem));

        editButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the task from being marked as complete when editing
            editTask(taskItem);
        });

        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the task from being marked as complete when deleting
            deleteTask(taskItem);
        });

        markedButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the task from being marked as complete when deleting
            markedTask(taskItem);
        });
    }

    function toggleComplete(taskItem) {
        taskItem.classList.toggle('completed');
    }

    function editTask(taskItem) {
        const newText = prompt('Edit your task:', taskItem.firstChild.textContent);
        if (newText) {
            taskItem.firstChild.textContent = newText;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function markedTask(taskItem) {
        taskList.markedChild(taskItem);
    }

});
