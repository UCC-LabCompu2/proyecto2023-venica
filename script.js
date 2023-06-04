/**
 * Comprueba si los valores ingresados son correctos.
 * @method comprobarValores
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
function dibujarGrafico() {
  const canvas = document.getElementById('grafico');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  // Limpia el lienzo
  ctx.clearRect(0, 0, width, height);

  // Define los puntos del gráfico
  const puntos = [
    { x: 0, y: height },
    { x: width / 2, y: height - 100 },
    { x: width, y: height },
  ];

  // Configura el estilo de la línea
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;

  // Dibuja el gráfico
  ctx.beginPath();
  ctx.moveTo(puntos[0].x, puntos[0].y);
  for (let i = 1; i < puntos.length; i++) {
    ctx.lineTo(puntos[i].x, puntos[i].y);
  }
  ctx.stroke();
}

// Llama a la función dibujarGrafico cuando se carga la página
window.onload = dibujarGrafico;

/**
 * Función que redirige al archivo "index.html".
 */
function volverIndex() {
  window.location.href = "index.html";
}
