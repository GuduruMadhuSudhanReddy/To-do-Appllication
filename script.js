document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.classList.add('todo-item');
        const span = document.createElement('span');
        span.textContent = todoText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '❌';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });
        li.appendChild(deleteButton);

        todoList.appendChild(li);
        todoInput.value = '';
        todoInput.focus();
    }
});
