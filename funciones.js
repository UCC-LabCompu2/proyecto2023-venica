// Función que comprueba si los valores ingresados son correctos
function comprobarValores() {
  const velocidadInicial = document.getElementById('velocidad-inicial').value;
  const aceleracion = document.getElementById('aceleracion').value;
  const tiempo = document.getElementById('tiempo').value;

  if (isNaN(velocidadInicial) || isNaN(aceleracion) || isNaN(tiempo)) {
    alert('Los valores ingresados no son válidos. Por favor, ingrese números.');
    document.getElementById('velocidad-inicial').value = '';
    document.getElementById('aceleracion').value = '';
    document.getElementById('tiempo').value = '';
  }
}

// Función que calcula algo en base a los valores ingresados
function calcular() {
  const velocidadInicial = parseFloat(document.getElementById('velocidad-inicial').value);
  const aceleracion = parseFloat(document.getElementById('aceleracion').value);
  const tiempo = parseFloat(document.getElementById('tiempo').value);

  if (isNaN(velocidadInicial) || isNaN(aceleracion) || isNaN(tiempo)) {
    alert('Los valores ingresados no son válidos. Por favor, ingrese números.');
    document.getElementById('posicion-final').value = '';
    return;
  }

  const posicionFinal = velocidadInicial * tiempo + 0.5 * aceleracion * tiempo * tiempo;
  document.getElementById('posicion-final').value = posicionFinal;

  dibujar(posicionFinal);
}

// Función que realiza un dibujo en el canvas
function dibujar(posicionFinal) {
  const canvas = document.getElementById('grafico');
  const ctx = canvas.getContext('2d');
  const x = posicionFinal * 10; // Escala la posición para el dibujo

  // Limpia el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibuja un rectángulo representando la posición final
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, canvas.height - 10, x, 10);
}
