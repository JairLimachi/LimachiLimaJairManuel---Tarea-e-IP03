document.getElementById("btnGuardar").addEventListener("click", function() {
    let d1 = document.getElementById("dato1").value;
    let d2 = document.getElementById("dato2").value;
    let d3 = document.getElementById("dato3").value;
    let resultadoDiv = document.getElementById("resultado");

    if (d1 === "" || d2 === "" || d3 === "") {
        resultadoDiv.innerHTML = "Por favor, rellene las tres cajas.";
        return;
    }

    // Creamos la lista (Array unidimensional) vacía
    let listaDatos = [];

    // Guardamos (empujamos) los 3 datos dentro de la lista
    listaDatos.push(d1);
    listaDatos.push(d2);
    listaDatos.push(d3);

    // Mostramos la lista completa en la pantalla
    resultadoDiv.innerHTML = "Los datos guardados en el array son:<br>[" + listaDatos.join(", ") + "]";
});
