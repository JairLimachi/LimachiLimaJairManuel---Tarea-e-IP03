document.getElementById("btnCalcular").addEventListener("click", function() {
    // Jalamos el precio que escribió el usuario
    let precio = parseFloat(document.getElementById("precioInput").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(precio) || precio <= 0) {
        resultadoDiv.innerHTML = "Por favor, ingrese un precio válido.";
        return;
    }

    // Evaluamos la condición del diagrama de flujo (Si precio > 3000)
    if (precio > 3000) {
        let impuesto = precio * 0.18;
        resultadoDiv.innerHTML = `Su precio es: S/. ${precio.toFixed(2)}<br>Su impuesto (18%) es: S/. ${impuesto.toFixed(2)}`;
    } else {
        resultadoDiv.innerHTML = `Su precio es: S/. ${precio.toFixed(2)}<br>No aplica impuesto (es menor o igual a 3000).`;
    }
});
