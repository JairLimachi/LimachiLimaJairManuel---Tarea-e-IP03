document.getElementById("btnIniciar").addEventListener("click", function() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiamos respuestas anteriores

    // 1. Preguntamos cuántos elementos desea almacenar en total
    let cantidad = parseInt(prompt("¿Cuántos elementos desea que tenga su array?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        resultadoDiv.innerHTML = "Cantidad no válida.";
        return;
    }

    // 2. Creamos nuestro array vacío
    let miArray = [];

    // 3. Usamos un bucle "for" para pedir datos uno por uno según la cantidad elegida
    for (let i = 0; i < cantidad; i++) {
        let dato = prompt(`Ingrese el dato para el elemento ${i + 1}:`);
        miArray.push(dato);
    }

    // 4. Imprimimos el resultado con formato de posiciones en pantalla
    let textoSalida = "<b>Los datos de los elementos del array son:</b><br>";
    for (let i = 0; i < miArray.length; i++) {
        textoSalida += `Posición ${i}: ${miArray[i]}<br>`;
    }
    
    resultadoDiv.innerHTML = textoSalida;
});
