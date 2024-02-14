/**
 * Calcula la posición final y dibuja un gráfico en el canvas.
 * @method calcular
 */
function calcular() {
  // Obtener los valores de los inputs
  const velocidadInicial = parseFloat(document.getElementById('velocidad-inicial').value);
  const aceleracion = parseFloat(document.getElementById('aceleracion').value);
  const tiempo = parseFloat(document.getElementById('tiempo').value);

  // Validar los valores de entrada
  if (isNaN(velocidadInicial) || isNaN(aceleracion) || isNaN(tiempo)) {
    alert('Por favor ingrese valores numéricos válidos en todos los campos.');
    return;
  }

  // Calcular la posición final utilizando la fórmula del MRUV
  const posicionFinal = velocidadInicial * tiempo + 0.5 * aceleracion * tiempo ** 2;

  // Mostrar la posición final en el input correspondiente
  document.getElementById('posicion-final').value = posicionFinal.toFixed(2);

  // Generar las posiciones para dibujar el gráfico
  const posiciones = [];
  for (let t = 0; t <= tiempo; t += 0.1) {
    const posicion = velocidadInicial * t + 0.5 * aceleracion * t ** 2;
    posiciones.push({ tiempo: t, posicion });
  }

  // Dibujar el gráfico en el canvas
  dibujarGrafico(posiciones);
}

/**
 * Dibuja un gráfico en el canvas utilizando las posiciones proporcionadas.
 * @method dibujarGrafico
 * @param {Array} posiciones - Array de objetos con las posiciones {tiempo, posicion}.
 */
function dibujarGrafico(posiciones) {
  const canvas = document.getElementById('grafico');
  const ctx = canvas.getContext('2d');

  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Validar que haya al menos dos posiciones para dibujar un gráfico
  if (posiciones.length < 2) {
    alert('No hay suficientes datos para dibujar el gráfico.');
    return;
  }

  // Configurar el estilo del gráfico
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;

  // Calcular los valores máximo y mínimo de tiempo y posición
  const maxTiempo = Math.max(...posiciones.map(p => p.tiempo));
  const minTiempo = Math.min(...posiciones.map(p => p.tiempo));
  const maxPosicion = Math.max(...posiciones.map(p => p.posicion));
  const minPosicion = Math.min(...posiciones.map(p => p.posicion));

  // Calcular la escala en el eje x e y
  const escalaX = canvas.width / (maxTiempo - minTiempo);
  const escalaY = canvas.height / (maxPosicion - minPosicion);

  // Dibujar los puntos del gráfico
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - (posiciones[0].posicion - minPosicion) * escalaY);
  posiciones.forEach(p => {
    const x = (p.tiempo - minTiempo) * escalaX;
    const y = canvas.height - (p.posicion - minPosicion) * escalaY;
    ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dibujar los ejes
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - (0 - minPosicion) * escalaY);
  ctx.lineTo(canvas.width, canvas.height - (0 - minPosicion) * escalaY);
  ctx.moveTo((0 - minTiempo) * escalaX, 0);
  ctx.lineTo((0 - minTiempo) * escalaX, canvas.height);
  ctx.stroke();
}

/**
 * Redirige al usuario a la página inicial.
 * @method volverIndex
 */
function volverIndex() {
  // Volver a la página inicial
  window.location.href = 'index.html';
}

