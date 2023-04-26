const todoList = ['Limpar a casa', 'Lavar o carro', 'Pintar o muro'];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-input-nome');
    const nome = inputElement.value;
    inputElement.value = '';
    todoList.push(nome);
    renderTodoList();
}

document.querySelector('.js-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});
