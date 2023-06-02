/**
 * Comprueba si los valores ingresados son correctos.
 * @method comprobarValores
 * @param {string} velocidadInicial - La velocidad inicial ingresada por el usuario.
 * @param {number} aceleracion - La aceleración ingresada por el usuario.
 * @param {number} tiempo - El tiempo ingresado por el usuario.
 */
function comprobarValores() {
  const velocidadInicial = document.getElementById('velocidad-inicial').value;
  const aceleracion = document.getElementById('aceleracion').value;
  const tiempo = document.getElementById('tiempo').value;

  if (isNaN(velocidadInicial) || isNaN(aceleracion) || isNaN(tiempo)) {
    // Los valores ingresados no son válidos. Se muestra un alert y se blanquea el contenido del campo.
    alert('Los valores ingresados no son válidos. Por favor, ingrese números.');
    document.getElementById('velocidad-inicial').value = '';
    document.getElementById('aceleracion').value = '';
    document.getElementById('tiempo').value = '';
  }
}

/**
 * Calcula algo en base a los valores ingresados por el usuario en los inputs.
 * @method calcular
 */
function calcular() {
  const velocidadInicial = parseFloat(document.getElementById('velocidad-inicial').value);
  const aceleracion = parseFloat(document.getElementById('aceleracion').value);
  const tiempo = parseFloat(document.getElementById('tiempo').value);

  if (isNaN(velocidadInicial) || isNaN(aceleracion) || isNaN(tiempo)) {
    // Los valores ingresados no son válidos. Se muestra un alert y se blanquea el contenido del campo.
    alert('Los valores ingresados no son válidos. Por favor, ingrese números.');
    document.getElementById('posicion-final').value = '';
    return;
  }

  // Realiza el cálculo basado en los valores ingresados.
  const posicionFinal = velocidadInicial * tiempo + 0.5 * aceleracion * tiempo * tiempo;
  document.getElementById('posicion-final').value = posicionFinal;

  // Llama a la función para realizar un dibujo en un canvas representativo y acorde a los valores ingresados.
  dibujar(posicionFinal);
}

/**
 * Realiza un dibujo sobre un canvas que sea representativo y acorde a los valores ingresados.
 * @method dibujar
 * @param {number} posicionFinal - La posición final calculada.
 */
function dibujar(posicionFinal) {
  const canvas = document.getElementById('grafico');
  const ctx = canvas.getContext('2d');
  const x = posicionFinal * 10; // Escala la posición para el dibujo

  // Limpia el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja algo en el canvas basado en la posición final calculada y otros parámetros.
  // Aquí se puede agregar el código para realizar el dibujo deseado.

  // Ejemplo: Dibuja un rectángulo representando la posición final
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, canvas.height - 10, x, 10);
}
