document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo.text;

            const editButton = document.createElement('button');
            editButton.textContent = '編集';
            editButton.onclick = () => location.href = `edit.html?index=${index}`;
            li.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '削除';
            deleteButton.onclick = () => {
                todos.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                renderTodos();
            };
            li.appendChild(deleteButton);

            todoList.appendChild(li);
        });
    }

    renderTodos();
});
