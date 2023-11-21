let todoList = ["Tarea de ejemplo", "Agrega mas :)"];

function createDeleteButton(todos, index) {
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.innerText = "Eliminar";
    deleteButton.addEventListener("click", () => {
        const newTodos = todos.filter((element, elementIndex) => index !== elementIndex);
        todoList = newTodos;
        renderTodoList(todoList);
    });
    return deleteButton;
}

function createEditButton(index){
    const editButton = document.createElement("button");
    editButton.className = "btn btn-warning";
    editButton.innerText = "Editar";
    editButton.addEventListener("click", () => {
        // todoList[indice] = nuevo valor
        todoList[index] = newTodo;
        renderTodoList(todoList);
    })
    return editButton;
}

function renderTodoList(todos) {
    todoUl.innerHTML = "";
    todos.forEach((todo, index) => {
        const newLi = document.createElement("li");
        newLi.innerText = todo;
        newLi.className = "list-group-item d-flex justify-content-between align-items-center";

        const delButton = createDeleteButton(todos, index);
        const editButton = createEditButton(index);

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "d-flex gap-2";
        buttonContainer.appendChild(delButton);
        buttonContainer.appendChild(editButton);


        newLi.appendChild(buttonContainer);
        todoUl.appendChild(newLi);
    });
    todoSpan.innerText = todos.length;
}

let newTodo = "";
const todoInput = document.getElementById("todo");
todoInput.addEventListener("change", (evento) => {
    newTodo = evento.target.value;
})

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todoList.push(newTodo);
    renderTodoList(todoList);
    todoInput.value = "";
});

const todoSpan = document.getElementById("todo-length");

const todoUl = document.getElementById("todo-list");

window.onload = function () {
    renderTodoList(todoList);
}