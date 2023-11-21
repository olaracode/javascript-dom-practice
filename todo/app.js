// form#todo-form
// input#todo
// span#todo-length
// ul#todo-list
let todoList = ["Tarea de ejemplo", "Agrega mas :)"];

function renderTodoList(todos){
    todoUl.innerHTML = "";
    todos.forEach((todo, index) => {
        const newLi = document.createElement("li");
        newLi.innerText = todo;
        newLi.className = "list-group-item d-flex justify-content-between align-items-center";

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger";
        deleteButton.innerText = "Eliminar";
        deleteButton.addEventListener("click", () => {
            // seleccionar todos menos el actual
            const newTodos = todos.filter((element, elementIndex) => index !== elementIndex);
            todoList = newTodos;
            renderTodoList(todoList) // recursiva
        })
        
        
        newLi.appendChild(deleteButton);
        todoUl.appendChild(newLi);
    })
    todoSpan.innerText = todos.length;
}






let newTodo = "";
const todoInput = document.getElementById("todo");
todoInput.addEventListener("change", (evento) => {
    newTodo = evento.target.value;
})

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    todoList.push(newTodo);
    renderTodoList(todoList);
    todoInput.value = "";
})

const todoSpan = document.getElementById("todo-length");

const todoUl = document.getElementById("todo-list");

window.onload = function(){
    renderTodoList(todoList);
}