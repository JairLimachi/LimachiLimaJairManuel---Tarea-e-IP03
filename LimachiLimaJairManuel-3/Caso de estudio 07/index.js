const btn = document.querySelector("#btnEnviar");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const clave = document.querySelector("#clave");
const repetirclave = document.querySelector("#repetirclave");
const mensaje = document.querySelector("#mensaje");

// Envío de datos usando solo javascript
btn.addEventListener("click", btnClick);

function btnClick(event) {
    event.preventDefault();
    console.log("Ingresó");
    console.log("Clave: " + clave.value);
    console.log("Repetirclave: " + repetirclave.value);

    let datos = {
        nombre: nombre.value,
        correo: correo.value,
        clave: clave.value
    };

    fetch("procesa.php", {
        method: "POST",
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status == 200) {
            mensaje.innerHTML = "SE REGISTRÓ SATISFACTORIAMENTE";
        } else {
            mensaje.innerHTML = "Error: " + data.message;
        }
    })
    .catch(error => console.log(error));
}
