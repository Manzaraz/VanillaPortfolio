const lineas = [
  "Desarrollador iOS",
  "Desarrollador Frontend",
  "Profesor de Frontend",
  "Desarrollador Full-Stack en JavaScript",
]

let indexLinea = 0,
  indexCaracter = 0;
const velocidad = 100

export function escribirTexto() {
  const texto = document.getElementById("texto")
  if (texto !== "" && texto !== null) {
    if (indexLinea < lineas.length) {
      const lineaActual = lineas[indexLinea];
      texto.textContent = lineaActual.slice(
        0,
        indexCaracter
      );
      indexCaracter++;

      if (indexCaracter > lineaActual.length) {
        indexLinea++;
        indexCaracter = 0;
        setTimeout(escribirTexto, 1000); // Espera 1 segundo antes de la siguiente línea
      } else {
        setTimeout(escribirTexto, velocidad);
      }
    } else {
      // Reiniciar el bucle
      indexLinea = 0; // Reiniciar el índice de línea
      setTimeout(escribirTexto, 1000); // Espera 1 segundo antes de comenzar de nuevo
    }
  }
}