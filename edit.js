$(document).ready(() => {
    const $todoForm = $('#todo-form');
    const $todoText = $('#todo-text');
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    if (index !== null) {
        $todoText.val(todos[index].text);
    }

    $todoForm.submit((e) => {
        e.preventDefault();
        const text = $todoText.val().trim();

        if (text) {
            if (index !== null) {
                todos[index].text = text;
            } else {
                todos.push({ text });
            }
            localStorage.setItem('todos', JSON.stringify(todos));
            location.href = 'index.html';
        }
    }
    );
});
