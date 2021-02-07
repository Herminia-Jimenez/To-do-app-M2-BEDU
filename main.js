var app = document.getElementById('app');


document.body.onload = create();

function create(){
  
  var toDoList = document.createElement("div");
  toDoList.setAttribute("id", "toDoContainer");
  app.appendChild(toDoList);
    
  var title = document.createElement("h1");
  title.setAttribute("id","Title");
  var titleContent = document.createTextNode("To Do List");
  title.appendChild(titleContent); //añade texto al h1 creado.
  document.body.insertBefore(title, app);

  var inputField = document.createElement("input");
  inputField.setAttribute("id","inputField");
  inputField.setAttribute("type","text");
  app.insertBefore(inputField, toDoContainer);

  var addToDoButton = document.createElement("button");
  addToDoButton.setAttribute("id","addToDo");
  var buttonContent = document.createTextNode("AGREGAR");
  addToDoButton.appendChild(buttonContent);
  app.insertBefore(addToDoButton, toDoContainer);

  



  addToDoButton.addEventListener('click',function(){

    var space = document.createElement("br");

    var check = document.createElement("input");
    
    check.setAttribute("type", "checkbox");
    toDoList.appendChild(check);
    
  
    check.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })

    var paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoList.appendChild(paragraph);
    inputField.value = "";

    var deleteButton = document.createElement("button");
    deleteButton.textContent = 'BORRAR';
    toDoList.appendChild(deleteButton);
    toDoList.appendChild(space);

    deleteButton.addEventListener('click',function(){
        toDoList.removeChild(check);
        toDoList.removeChild(paragraph);
        toDoList.removeChild(deleteButton);
        toDoList.removeChild(space);
    })
})
    
}


 



