
const estudiantes = [
  { nombre: 'Pedro', calificacion: 10 },
  { nombre: 'Ana', calificacion: 50 },
  { nombre: 'Mariana', calificacion: 25 },
  { nombre: 'Miguel', calificacion: 30 }
];


function agregarEstudiante(nombre, calificacion) {
  estudiantes.push({ nombre, calificacion });
}


function filtrarPorCalificacion(minCalificacion) {
  return estudiantes.filter(estudiante => estudiante.calificacion >= minCalificacion);
}


function verificarReprobados() {
  const reprobados = estudiantes.filter(estudiante => estudiante.calificacion < 30);
  if (reprobados.length > 0) {
    console.log("Estudiantes reprobados:");
    reprobados.forEach(estudiante => console.log(`${estudiante.nombre}: ${estudiante.calificacion}`));
  } else {
    console.log("No hay estudiantes reprobados.");
  }
}


function encontrarCalificacionMaxima() {
  const estudianteMax = estudiantes.reduce((max, estudiante) => 
    estudiante.calificacion > max.calificacion ? estudiante : max
  );
  console.log(`La calificación más alta es de ${estudianteMax.nombre}: ${estudianteMax.calificacion}`);
}


function mostrarMenu() {
  let opcion;

  do {
    opcion = prompt(
      "Sistema de Calificaciones. Ingrese una opción:\n\n" +
      "1 - Agregar estudiante\n" +
      "2 - Filtrar estudiantes por calificación\n" +
      "3 - Verificar estudiantes reprobados\n" +
      "4 - Calcular calificación más alta\n" +
      "5 - Salir"
    );

    switch (opcion) {
      case "1":
        const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
        const calificacion = parseInt(prompt("Ingrese la calificación de " + nombreEstudiante));
        agregarEstudiante(nombreEstudiante, calificacion);
        console.log("Estudiante agregado");
        break;
      case "2":
        const minCalificacion = parseInt(prompt("Ingrese la calificación mínima:"));
        const estudiantesFiltrados = filtrarPorCalificacion(minCalificacion);
        if (estudiantesFiltrados.length > 0) {
          console.log("Estudiantes con calificación mayor o igual a " + minCalificacion + ":");
          estudiantesFiltrados.forEach(estudiante => console.log(`${estudiante.nombre}: ${estudiante.calificacion}`));
        } else {
          console.log("No hay estudiantes con calificación mayor o igual a " + minCalificacion);
        }
        break;
      case "3":
        verificarReprobados();
        break;
      case "4":
        encontrarCalificacionMaxima();
        break;
      case "5":
        alert("Gracias por usar este sistema de calificaciones, ten un feliz dia ;D .");
        break;
      default:
        alert("Opción no válida.");
        break;
    }
  } while (opcion !== "5");
}


mostrarMenu();
