// selectors

// 

const newInput = document.querySelector(".new-input");

// button to add new input
const addButton = document.querySelector(".add-button");

// the todo list
const todoList = document.querySelector(".todo-list");

//Event Listeners
addButton.addEventListener("click", addItem);
// mark complete item
todoList.addEventListener('click', markItem);
// delete event
todoList.addEventListener("click", deleteItem);


// function addItem
function addItem(e){
    e.preventDefault();
    // console.log("ba");
    // get input value from above
    //  create new li
    const listItem = document.createElement("li");
    // add class
    listItem.classList.add("item");
    //  listItem.appendChild(document.createTextNode(newInput.value));
    listItem.textContent = newInput.value;

    // create a complete button
    const completeButton = document.createElement("button");
    // add class
    completeButton.classList.add("complete");
    // addcontent
    // completeButton.innerHTML = '<img src="icons/check.png" alt="tick" width="20" height="20">';
    // new button
    completeButton.innerHTML = '<i class="far fa-check-square"></i>';
    // completeButton.textContent = "Done";
    // append to li
    listItem.appendChild(completeButton);

    // create a delete button
    const deleteButton = document.createElement("button");
    // add class
    deleteButton.classList.add("delete");
    // add content
    // deleteButton.textContent = "Del";
    // deleteButton.innerHTML = '<img src="icons/delete.png" alt="tick" width="20" height="20">';
    // new button icon
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    // apend to li
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    console.log(todoList);
};

function markItem(e) {
    const item = e.target.parentNode;
    console.log(item);
    item.classList.toggle("completed");
}

function deleteItem(e) {
    // e.target.parentNode.remove()
    if (e.target.classList.contains("delete")){
        // console.log(1);
        const li = e.target.parentElement;
        todoList.removeChild(li);
    }
};
