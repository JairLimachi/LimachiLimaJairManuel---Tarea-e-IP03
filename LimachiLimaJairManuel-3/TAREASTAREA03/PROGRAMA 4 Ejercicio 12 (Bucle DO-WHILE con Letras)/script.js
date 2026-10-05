document.getElementById("btnEmpezar").addEventListener("click", function() {
    let letra;
    let resultadoDiv = document.getElementById("resultado");

    // El "do-while" asegura que el código se ejecute al menos una vez
    do {
        letra = prompt("Ingrese una letra del alfabeto:\n(Escriba 'x' o 'X' para salir del programa)");
        
        // Si el usuario cancela la ventana emergente, rompemos el bucle
        if (letra === null) {
            resultadoDiv.innerHTML = "Proceso cancelado por el usuario.";
            return;
        }

    } while (letra !== 'x' && letra !== 'X'); // Se repite MIENTRAS la letra NO sea 'x' ni 'X'

    // Al salir del bucle, mostramos el mensaje de éxito
    resultadoDiv.innerHTML = "¡Algoritmo terminado con éxito!<br>Se detectó la letra de salida 'X'.";
});
