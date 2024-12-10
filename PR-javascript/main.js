function generarTabla(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


let continuar = true;

while (continuar) {
    let numero = parseInt(prompt("¿Qué tabla de multiplicar quieres generar? (1-10):"));
    if (numero >= 1 && numero <= 10) {
        generarTabla(numero); 
        continuar = confirm("¿Quieres generar otra tabla?");
    } else {
        alert("Ingresa un número válido entre 1 y 10.");
    }
}

alert("¡Gracias por usar el generador de tablas!");
