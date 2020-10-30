document.addEventListener("DOMContentLoaded", function(event) { 
// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);



// FUNCTIONS
function addTodo(event){
    // Prevent form submitting
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = "hey";
    todoDiv.appendChild(newTodo);

    // Checked BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerText = "completed";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Remove BUTTON
    const removeButton = document.createElement('button');
    removeButton.innerText = "removed";
    removeButton.classList.add("remove-btn");
    todoDiv.appendChild(removeButton);

    // Append to the list
    todoList.appendChild(todoDiv)
}

});


