document.getElementById("agregar").addEventListener("click", function() {
    const input = document.getElementById("nueva-tarea");
    const texto = input.value.trim();

    if (texto) {
        const saludo = `¡Hola, ${texto} Gracias por tu visita!`;
        document.getElementById("saludo").innerHTML = saludo;
        input.value = "";
    } else {
        document.getElementById("saludo").innerHTML = "Ingresa tu nombre";
    }
});

