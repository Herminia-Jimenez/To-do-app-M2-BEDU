var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'BORRAR';
    toDoContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click',function(){
        console.log("borrar");
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleteButton);
    })
})


