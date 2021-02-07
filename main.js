// Shorthand para el objeto document.
const d = document;

// Seleccion de contenedor padre de la aplicacion.
const appContainer = d.getElementById("app");
addClasses(appContainer, "container-lg", "mx-4", "py-4", "bg-primary");

// Funcion que crea un elemento nodo a partir de su tipo.
function createNode(typeNode = "div") {
  return d.createElement(typeNode);
}

// Funcion que añade nodos de tipo elemento o texto, al elemento padre.
function appendChildNodes(parentNode, ...childNodes) {
  childNodes.forEach((element) => {
    if (typeof element === "string") {
      parentNode.appendChild(d.createTextNode(element));
    } else {
      parentNode.appendChild(element);
    }
  });
}

// Funcion que añade una lista de clases a un elemento.
function addClasses(node, ...styleClasses) {
  styleClasses.forEach((style) => {
    node.classList.add(style);
  });
}

// Bloque para integrar cabecera de la app en html
const appHeader = createNode("form");
appHeader.id = "appHeader";
addClasses(appHeader, "container-fluid", "mb-4");

const inputTask = createNode("input");
addClasses(inputTask, "form-control", "mr-3");
inputTask.type = "text";
inputTask.name = "todo";
inputTask.placeholder = "Add a new task...";

const submitTask = createNode("button");
addClasses(submitTask, "btn", "btn-info", "px-5");
submitTask.type = "submit";
appendChildNodes(submitTask, "Add");

// Adicion de nodos hijos al header
appendChildNodes(appHeader, inputTask, submitTask);

// Bloque para integrar el cuerpo de la app en html
const appBody = createNode("main");
appBody.id = "todo-list";
addClasses(appBody, "container-fluid", "bg-active", "py-2");

// Logica de adicion de todos
function generateToDoTemplate(toDoDescription) {
  const toDoTemplate = `
    <div class="todo-item row shadow w-100  bg-light ">
        <input class="checkToDo col" type="checkbox">
        <div class="descriptionWrapper col-10 border-secondary"> 
            ${toDoDescription} 
        </div>
        <button class="btn deleteToDo col"><img src="./delete.svg"></button>
    </div>
    `;
  appBody.innerHTML += toDoTemplate;
}

appHeader.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDo = e.target.todo.value.trim();
  if (newToDo.length) {
    generateToDoTemplate(newToDo);
    e.target.reset();
  }
});

// Adicion de nodos hijos a la aplicacion
appendChildNodes(appContainer, appHeader, appBody);

// Logica de marcado como hecho del todo
function checkToDoDone() {
    d.querySelectorAll(".checkToDo").forEach((item) => {
        item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("done");
        });
    });
}

// Logica de eliminacion de todos
function deleteToDo() {
    d.querySelectorAll(".deleteToDo").forEach((item) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
      });
    });
  }