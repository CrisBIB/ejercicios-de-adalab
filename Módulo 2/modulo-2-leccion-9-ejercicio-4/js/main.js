const countElement = document.querySelector('.js-count');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
];
  
//1. Mostrar una frase que indique cuántas tareas hay.
countElement.innerHTML = `Tengo ${tasks.length} tareas pendientes:`;

//2. Pintar todas las tareas en pantalla + 3. Tachar las ya realizadas + 4. Permitir marcar una tarea como 'completa' o 'incompleta'.
const renderList = () => {

    let listTasks = " ";

    // Con for... of 
    /*for (let oneTask of tasks) {
    listTasks += `<li ${oneTask.completed ? 'class="crossoff"' : ''} class="js-crossoff"><input type="checkbox" ${oneTask.completed ? 'checked="checked"' : ''} class"js-complete" value=${i}>${oneTask.name}</li>`;
    } */
    console.log(oneTask);
    // Con for...
    for (let i = 0; i < tasks.length; i++) {
        const oneTask = tasks[i];
        listTasks += `<li ${oneTask.completed ? 'class="crossoff"' : ''} class="js-crossoff"><input type="checkbox" ${oneTask.completed ? 'checked="checked"' : ''} class"js-complete" value=${i}>${oneTask.name}</li>`;
        
    }
    console.log(listTasks);
    countElement.innerHTML += `<ol>${listTasks}</ol>`;
}

const listenInputs = () => { 
    const allInputs = document.querySelectorAll('.js-complete');
    for (const oneInput of allInputs) {
        oneInput.addEventListener('click', handleCheckBox);
    }
}

const handleCheckBox = (ev) => {
    const iList = parseInt(ev.currentTarget.value);
    tasks[iList].completed = !tasks[iList].completed;

renderList();
};

renderList();



