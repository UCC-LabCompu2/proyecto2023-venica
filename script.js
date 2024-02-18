let mostrarValor = (id, valor) => {
  document.getElementById(id).textContent = valor;
}

let calcular = () => {
  let vi, di, a;

  di = parseFloat(document.getElementById("x0").value); 
  vi = parseFloat(document.getElementById("v0").value); 
  a = parseFloat(document.getElementById("a").value); 

  if ((vi === 0 && a === 0) || (vi === 0 && di === 0) || (di === 0 && a === 0) || (vi === 0 && di === 0 && a === 0)) {
      alert("Solo 1 dato puede ser igual a 0.");
      reiniciar();
  } else {
      comenzarAnimacion();
  }
}

let x = 0;
let intervalId; // Necesario definir intervalId fuera de la función comenzarAnimacion

let animarImagen = () => {

  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d"); 

  let vi, dx;
  vi = parseFloat(document.getElementById("v0").value);

  let img = new Image();
  img.src = "imagenes/auto.png";

  img.onload = function () {
      canvas.width = canvas.width;
      ctx.drawImage(img, x, 0);
  }

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
  if (x > 760) { 
      x = 0;
  }
}

let comenzarAnimacion = () => {
  console.log("Empieza Animacion");
  x = 0;
  intervalId = setInterval(animarImagen, 0);
  document.getElementById("boton-calcular").disabled = true;
  setTimeout(detenerAuto, 1500);
}

let detenerAuto = () => {
  console.log("Termino animacion");
  clearInterval(intervalId); 
  document.getElementById("boton-calcular").disabled = false;
}

let aparecerImagen = () => {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");

  let img = new Image();
  img.src = "imagenes/auto.png";

  canvas.width = canvas.width;

  img.onload = function () {
      ctx.drawImage(img, 0, 0);
  }
}

// Función para calcular y mostrar el resultado final de la posición del objeto en un MRUV
function mostrarResultadoFinal() {
  // Obtener los valores ingresados por el usuario
  let x0 = parseFloat(document.getElementById("x0").value); // Distancia inicial
  let v0 = parseFloat(document.getElementById("v0").value); // Velocidad inicial
  let a = parseFloat(document.getElementById("a").value); // Aceleración

  // Calcular la posición final usando la fórmula del MRUV
  let t = (2 * v0) / a; // Calcular el tiempo necesario para detenerse
  let x = x0 + v0 * t + 0.5 * a * Math.pow(t, 2); // Calcular la posición final

  // Mostrar el resultado en un mensaje de alerta
  alert("La posición final del objeto es: " + x.toFixed(2) + " metros");
}


let reiniciar = () => {
  document.getElementById("x0").value = 0;
  document.getElementById("v0").value = 0;
  document.getElementById("a").value = 0;

  document.getElementById("valor_di").textContent = '0';
  document.getElementById("valor_vi").textContent = '0';
  document.getElementById("valor_a").textContent = '0';

  aparecerImagen();
}

function volverIndex() {
  window.location.href = "index.html"; // Funcion para volver al inicio
}
