const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Cargar datos al iniciar
loadData();

taskForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const task = taskInput.value;
    console.log(task);

    const li = document.createElement("li");
    li.textContent = task;
    li.append(  agregarBotonesSpan("❌","delete-btn"),
                agregarBotonesSpan("✏️","edit-btn"));

    createData(task);
    taskInput.value = "";
    taskList.appendChild(li);
});

function agregarBotonesSpan(texto, nombreClase ){
    const btn = document.createElement("span");
    btn.textContent = texto;
    btn.classList.add(nombreClase);
    return btn;
}

taskList.addEventListener("click", (event)=>{
    if(event.target.closest(".delete-btn")){
        if(confirm("¿Estás seguro de borrar este elemento?")){
            deleteData(event.target.closest(".delete-btn").parentElement.firstChild.textContent);
            event.target.closest(".delete-btn").parentElement.remove();
        }
    }else if(event.target.closest(".edit-btn")){
        const txtEdit = prompt("Editar");
        event.target.closest(".edit-btn").parentElement.firstChild.textContent = txtEdit;
        update();
    }
});

document.querySelector('#toggle-theme-btn').addEventListener('click',(event)=>{
    document.body.classList.toggle("dark-theme");
});

// Funciones localStorage Tareas
function createData(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadData(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((tarea)=>{
        const li = document.createElement("li");
        li.textContent = tarea;
        li.append(  agregarBotonesSpan("❌", "delete-btn"),
                    agregarBotonesSpan("✏️", "edit-btn"));
        taskList.appendChild(li);
    });
}

function update(){
    const li = document.querySelectorAll("li");
    const tasks = [];
    li.forEach((item) => {
        tasks.push(item.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteData(texto){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updateTasks = tasks.filter((task) => task !== texto);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
}

// Funciones del Modal Login
document.getElementById("loginLink").addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "none";
});

document.getElementById("loginBtn").addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (user === "admin" && pass === "12345") {
        message.textContent = "¡Login exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
});
