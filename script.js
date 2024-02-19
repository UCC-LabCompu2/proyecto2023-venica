/**
 * Muestra en pantalla el valor que se ingresa en la barra
 * @method mostrarValor
 * @param {string} id - Id del elemento input del HTML
 * @param {number} valor - Contiene el valor del input que ingreso el usuario en la barra
 */
let mostrarValor = (id, valor) => {
  document.getElementById(id).textContent = valor;
}

/**
 * Función para realizar el cálculo y comenzar la animación.
 * @method calcular
 */
let calcular = () => {
  let vi, di, a;

  // Obtener los valores de los campos de entrada
  di = parseFloat(document.getElementById("x0").value); // Distancia inicial
  vi = parseFloat(document.getElementById("v0").value); // Velocidad inicial
  a = parseFloat(document.getElementById("a").value); // Aceleración

  // Verificar si se proporcionaron suficientes datos para comenzar la animación
  if ((vi === 0 && a === 0) || (vi === 0 && di === 0) || (di === 0 && a === 0) || (vi === 0 && di === 0 && a === 0)) {
      alert("Solo 1 dato puede ser igual a 0 (Distancia Inicial).");
      reiniciar(); // Reiniciar los campos de entrada
  } else {
      comenzarAnimacion(); // Comenzar la animación
  }
}

// Variables para la animación
let x = 0;
let intervalId; // Necesario definir intervalId fuera de la función comenzarAnimacion

/**
 * Función para animar la imagen del auto.
 * @method animarImagen
 */
let animarImagen = () => {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d"); 

  let vi, dx;
  vi = parseFloat(document.getElementById("v0").value);

  let img = new Image();
  img.src = "imagenes/auto.png";

  // Dibujar la imagen en el canvas
  img.onload = function () {
      canvas.width = canvas.width; // Limpiar el canvas
      ctx.drawImage(img, x, 0); // Dibujar la imagen en la posición actual
  }

  // Determinar el desplazamiento horizontal en función de la velocidad inicial
  if (vi >= 11.25) { 
      dx = 2;
      x = x + dx;
  } else if ((vi >= 7.5) && (vi < 11.25)) {
      dx = 1.5;
      x = x + dx;
  } else if ((vi >= 3.5) && (vi < 7.5)) {
      dx = 1;
      x = x + dx;
  } else if (vi < 3.5) {
      dx = 0.5;
      x = x + dx;
  }

  console.log("la coordenada x es: " + x);

  // Reiniciar la posición si la imagen sale del canvas
  if (x > 760) { 
      x = 0;
  }
}

/**
 * Función para comenzar la animación.
 * @method comenzarAnimacion
 */
let comenzarAnimacion = () => {
  console.log("Empieza Animacion");
  x = 0;
  intervalId = setInterval(animarImagen, 0); // Iniciar la animación con un intervalo de 0 ms
  document.getElementById("boton-calcular").disabled = true; // Deshabilitar el botón de calcular
  setTimeout(detenerAuto, 1500); // Detener la animación después de 1500 ms
}

/**
 * Función para detener la animación.
 * @method detenerAuto
 */
let detenerAuto = () => {
  console.log("Termino animacion");
  clearInterval(intervalId); // Detener la animación
  document.getElementById("boton-calcular").disabled = false; // Habilitar el botón de calcular
}

/**
 * Función para mostrar la imagen del auto inicialmente.
 * @method aparecerImagen
 */
let aparecerImagen = () => {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");

  let img = new Image();
  img.src = "imagenes/auto.png";

  canvas.width = canvas.width; // Limpiar el canvas

  // Dibujar la imagen en el canvas
  img.onload = function () {
      ctx.drawImage(img, 0, 0);
  }
}

/**
 * Función para reiniciar los campos de entrada y mostrar la imagen inicial.
 * @method reiniciar
 */
let reiniciar = () => {
  document.getElementById("x0").value = 0;
  document.getElementById("v0").value = 0;
  document.getElementById("a").value = 0;

  document.getElementById("valor_di").textContent = '0';
  document.getElementById("valor_vi").textContent = '0';
  document.getElementById("valor_a").textContent = '0';

  aparecerImagen(); // Mostrar la imagen inicial
}

/**
 * Función para calcular y mostrar el resultado final de la posición del objeto en un MRUV.
 * @method mostrarResultadoFinal
 */
function mostrarResultadoFinal() {
  // Obtener los valores ingresados por el usuario
  let x0 = parseFloat(document.getElementById("x0").value); // Distancia inicial
  let v0 = parseFloat(document.getElementById("v0").value); // Velocidad inicial
  let a = parseFloat(document.getElementById("a").value); // Aceleración

  // Calcular el tiempo necesario para detenerse usando la fórmula del MRUV
  let t = (2 * v0) / a;

  // Calcular la posición final usando la fórmula del MRUV
  let x = x0 + v0 * t + 0.5 * a * Math.pow(t, 2);

  // Mostrar el resultado en un mensaje de alerta
  alert("La posición final del objeto es: " + x.toFixed(2) + " metros");
}

/**
 * Función para redirigir al usuario a la página de inicio.
 * @method volverIndex
 */
function volverIndex() {
  window.location.href = "index.html"; // Redirigir al usuario a la página de inicio
}
