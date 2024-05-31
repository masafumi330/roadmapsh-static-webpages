$(document).ready(() => {
    const $todoList = $("#todo-list");
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    const renderTodos = () => {
        $todoList.empty();
        $.each(todos, (index, todo) => {
            const $li = $('<li>').text(todo.text);

            const $editButton = $('<button>').text('編集');
            $editButton.on('click', () => location.href = `edit.html?index=${index}`);
            $li.append($editButton);

            const $deleteButton = $('<button>').text('削除');
            $deleteButton.on('click', () => {
                todos.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                renderTodos();
            });
            $li.append($deleteButton);

            $todoList.append($li);
        });
    }

    renderTodos();
});
