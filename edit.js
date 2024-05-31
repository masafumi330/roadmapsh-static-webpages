document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoText = document.getElementById('todo-text');
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    if (index !== null) {
        todoText.value = todos[index].text;
    }

    todoForm.onsubmit = function(e) {
        e.preventDefault();
        const text = todoText.value.trim();

        if (text) {
            if (index !== null) {
                todos[index].text = text;
            } else {
                todos.push({ text });
            }
            localStorage.setItem('todos', JSON.stringify(todos));
            location.href = 'index.html';
        }
    };
});
