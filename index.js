import dayjs from 'dayjs' // ES 2015
dayjs().format()


const updateClock = () => {
    var now = dayjs();
    console.log(now.format('YYYY/MM/DD HH:mm:ss')); // 2020/01/01 12:34:56
    $('#clock').text(now.format('YYYY/MM/DD HH:mm:ss'));
};
// 1秒ごとにupdateClock関数を実行
setInterval(updateClock, 1000);
updateClock();

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
