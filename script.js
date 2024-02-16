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
  document.getElementById("boton").disabled = true;
  setTimeout(detenerAuto, 1500);
}

let detenerAuto = () => {
  console.log("Termino animacion");
  clearInterval(intervalId); 
  document.getElementById("boton").disabled = false;
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

let reiniciar = () => {
  document.getElementById("x0").value = 0;
  document.getElementById("v0").value = 0;
  document.getElementById("a").value = 0;

  document.getElementById("valor_di").textContent = '0';
  document.getElementById("valor_vi").textContent = '0';
  document.getElementById("valor_a").textContent = '0';

  aparecerImagen();
}


