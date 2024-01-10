
// Elaborar un programa que permita realizar el siguiente juego:
// El juego consiste en que el usuario ingrese un numero entre 0 y 100 intentando adivinar cual es el que hemos establecido como numero misterioso 

// ESTO AUN NO ME QUEDA CLARO
// Cuando trabajamos con ciclos en JS la informacion que queramos mostrar en pantalla con print o document.write solo se vera un vez finalice el ciclo
// Si queremos mostrar informacion de forma progresiva (entre iteraciones) debemos usar alerts

// NOTA:
// En JavaScript no es posible que un ciclo muestre información en tiempo real en el navegador a medida que se ingresan los registros. lo ideal seria que El usuario proporcionará el número de registros y la información se mostrará de forma progresiva, sin esperar a que termine el ciclo completo, osea que se interrumpa el ciclo por una pequeña porcion de tiempo solo para que se muestre en el navegador la informacion ingresada


//DECLARACION DE FUNCIONES
function print(textoenpantalla) {
  document.write(textoenpantalla);
  document.write("<br>");
}

function saltarLinea() {
  document.write("<br>");
  document.write("<br>");
}

let numeroMisterioso = Math.round(Math.random() * 100);


let numeroIngresado;
let i = 0;
while (numeroIngresado != numeroMisterioso) {
  numeroIngresado = parseInt(prompt(`Ingrese un numero entero entre 0 y 100`));
  i += 1;
  while (numeroIngresado > 100 || numeroIngresado < 0) {
    alert(`ERROR! Ingrese un numero Valido! (Un entero entre 0 y 100)`);
    numeroIngresado = parseInt(prompt(`Ingrese un numero entero entre 0 y 100`));
    i += 1;
  }
  switch (true) {
    case (numeroIngresado === numeroMisterioso):
      alert(`Felicidades! Adivinaste el numero Misterioso, en el intento #${i}`);
      break;
    case (numeroIngresado >= numeroMisterioso):
      alert(`El numero Misterioso es Menor`);
      break;
    case (numeroIngresado <= numeroMisterioso):
      alert(`El numero Misterioso es Mayor`);
      break;
  }
}


