// CORRECCIÓN: Definición de variables que faltaban al inicio del archivo
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

// Escuchamos los clics para ejecutar la lógica de la calculadora
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valorBoton = boton.textContent;

        // Si se presiona la tecla 'C' limpiamos la pantalla volviendo a 0
        if (boton.id === "limpiar") {
            pantalla.value = "0";
            return;
        }

        // Si se presiona '=', procesamos matemáticamente la cadena
        if (boton.id === "igual") {
            try {
                // Evaluamos de forma segura la expresión acumulada
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Error";
            }
            return;
        }

        // Si la pantalla muestra un '0' inicial o un 'Error', lo reemplazamos por el nuevo número
        if (pantalla.value === "0" || pantalla.value === "Error") {
            pantalla.value = valorBoton;
        } else {
            // Caso contrario, concatenamos el carácter al final
            pantalla.value += valorBoton;
        }
    });
});
