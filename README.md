# 24 BruTask 📋

![App Preview](http://drive.google.com/uc?export=view&id=1GXBm0-LIEoLr7PZ6EY2BUtkCg1aE-_PL)

_Desarrollo de una aplicación "To Do App" en la cual un usuario podrá:_
* Agregar nuevas tareas a su lista.
* Marcar las tareas como completadas. 
* Eliminar tareas.

## Construido con 🛠️

_Herramientas utilizadas para crear el proyecto:_

* [Bootstrap-Darkly Theme](https://bootswatch.com/darkly/) - El framework de css más usado.
* [Vanilla JS](https://www.javascript.com/) - Hace referencia al uso de JavaScript sin bibliotecas adicionales.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Lenguaje de marcado para la elaboración de páginas web.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - Lenguaje de hojas de estilo para crear la presentación de una página web.
* [FontAwesome](https://fontawesome.com/) - Toolkit de fuente e íconos basado en CSS y Less.

## Autores ✒️

* **Jiménez Castillo María Herminia** - *Estilos* - [Herminia-Jimenez](https://github.com/Herminia-Jimenez/)
* **Rodríguez Alvarado Christian** - *Funcionalidad de Eliminar Tareas* - [Chris9694](https://github.com/Chris9694)
* **Méndez Vásquez Raúl Eduardo** - *Funcionalidad de Marcar por terminada la Tarea* - [Raulmendezv](https://github.com/Raulmendezv)
* **Audetat Facio Sebastián Emilio** - *Funcionalidad de Añadir Tareas* - [Grufty295](https://github.com/Grufty295)

## Desarrollo 👨🏻‍💻

### Metodología de Trabajo

>1. Discusión del proyecto y distribución de tareas.

>2. Creación de Repositorio y setup de Ramas individuales.

>3. Desarrollo de tareas individuales y reportes de fallas.

>4. Exposición de avances y retroalimentación grupal.

>5. Corrección de detalles.

>6. Recopilación e implementación de tareas.

### Codificación

Para comenzar con el código se declaró una variable que almacene de forma acotada el objeto "document".

Se dio paso a crear una función llamada createNode que recibe por parámetro una variable que determina el tipo de nodo a crear, donde por default se hará un nodo elemento de tipo div.

Se desarrolló una función de nombre appendChildNodes que tiene como parámetros el nodo padre al que se le añadirán todos los nodos pasados al parámetro con el operador rest de childNodes, que evalúa si el childNode es de tipo texto para crearlo y añadirlo como nodo de texto y si no, simplemente añadir el nodo.

Se creó una función llamada addClasses donde recibe el parámetro del nodo al que se le añadirán por medio de una iteración a los parámetros pasados por el operador rest styleClasses en el atributo classList del nodo.

Una vez que se codificaron las funciones de utilidad se utilizaron para generar la estructura del html de la aplicación y manipular los atributos de los elementos creados:

  - Título.
  - Cabecera con formulario.
  - Cuerpo de la lista de tareas.
  
Con la estructura base html integrada, sigue la lógica o funcionalidad de la aplicación.

Para añadir una tarea se creó la función llamada generateToDoTemplate, cuyo único parámetro es la descripción de la tarea por hacer.
```javascript
function generateToDoTemplate(toDoDescription) {
  const toDoTemplate = `  
  <div class="todo-item row shadow w-100 bg-dark">
    <input class="checkToDo col" type="checkbox">
    <div class="descriptionWrapper col-8 col-sm-10 border-secondary"> 
        ${toDoDescription}
    </div>
    <button class="btn deleteToDo col"><i class="fas fa-trash"></i></button>
  </div>
    `;
  appBody.innerHTML += toDoTemplate;
}
```

Para marcar una tarea como terminada se creó la función llamada checkToDoDone.
```javascript
function checkToDoDone() {
  d.querySelectorAll(".checkToDo").forEach((item) => {
    item.checked = item.nextElementSibling.classList.contains("done");
    item.addEventListener("click", () => {
      item.nextElementSibling.classList.toggle("done");
    });
  });
}
```

Para eliminar una tarea de la lista de tareas se creó la función deleteToDo.
```javascript
function deleteToDo() {
  d.querySelectorAll(".deleteToDo").forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
    });
  });
}
```

Para integrar la lógica de nuestras funciones usamos el evento de "Submit" que posee el formulario donde el usuario ingresa su nueva tarea por hacer.
```javascript
appHeader.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDo = e.target.todo.value.trim();
  if (newToDo.length) {
    generateToDoTemplate(newToDo);
    checkToDoDone();
    deleteToDo();
    e.target.reset();
  }
});
```

## Licencia 📄

Este proyecto está bajo la Licencia [MIT](https://choosealicense.com/licenses/mit/)

## Expresiones de Gratitud 🎁

* Agradecimientos especiales al equipo de BEDU en colaboración con Becas Santander: Tres Caminos para Impulsar tu Carrera.
* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 

---
⌨️ con ❤️ por el equipo #24 😊
