// Shorthand para el objeto document.
const d = document;

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

const appContainer = d.getElementById("app");
addClasses(appContainer, "container-lg", "mx-4", "py-4", "bg-primary");

// Bloque de codigo para integrar cabecera de la app en html
const appHeader = createNode("header");
addClasses(appHeader, "container-fluid", "mb-4");
appHeader.id = "appHeader";

const appInputTask = createNode("input");
addClasses(appInputTask, "form-control", "mr-4");
appInputTask.type = "text";
appInputTask.placeholder = "Add a new task...";

const appSubmitTask = createNode("button");
addClasses(appSubmitTask, "btn", "btn-info");
appSubmitTask.type = "submit";
appendChildNodes(appSubmitTask, "Add");

// Bloque de codigo para integrar el cuerpo de la app en html
const appBody = createNode("main");
addClasses(appBody, "container-fluid");

// Adicion de nodos hijos al header
appendChildNodes(appHeader, appInputTask, appSubmitTask);

// Adicion de nodos hijos a la aplicacion
appendChildNodes(appContainer, appHeader, appBody);
