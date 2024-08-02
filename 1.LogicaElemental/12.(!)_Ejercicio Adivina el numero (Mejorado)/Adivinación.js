
// Elaborar un programa que permita realizar el siguiente juego:
// El juego consiste en que el usuario ingrese un numero entre 0 y 100 intentando adivinar cual es el que hemos establecido como numero misterioso

// Cuando trabajamos con ciclos en JS la informacion que queramos mostrar en pantalla con print o document.write solo se vera un vez finalice el ciclo
// Si queremos mostrar informacion de forma progresiva (entre iteraciones) debemos usar alerts

// NOTA:
// En JavaScript no es posible que un ciclo muestre información en tiempo real en el navegador a medida que se ingresan los registros. lo ideal seria que El usuario proporcionará el número de registros y la información se mostrará de forma progresiva, sin esperar a que termine el ciclo completo, osea que se interrumpa el ciclo por una pequeña porcion de tiempo solo para que se muestre en el navegador la informacion ingresada


//WORK-FLOW FUNCTION'S
function print(text) {
  document.write(text);
  document.write("</br>");
}

function lineBreak() {
  document.write("</br>");
  document.write("</br>");
}
//

const secretNumber = (Math.round(Math.random() * 100) + 1);
let numberEnteredByUser;
let i = 0;
console.log(secretNumber);

while (numberEnteredByUser != secretNumber) {
  i += 1;
  numberEnteredByUser = parseInt(prompt(`Ingresa un numero entero entre 1 y 100`));
  console.log(`Numero ingresado #${i}: ${numberEnteredByUser}`);
  while (numberEnteredByUser < 0 || numberEnteredByUser > 100) {
    i += 1;
    alert(`ERROR!! Ingrese un numero entero dentro del rango establecido (Entre 0 y 100)`);
    numberEnteredByUser = parseInt(prompt(`Ingresa un numero entero entre 1 y 100`));
    console.log(`Numero ingresado #${i}: ${numberEnteredByUser}`);
  }

  if (numberEnteredByUser === secretNumber) {
    alert(`Felicidades!! Adivinaste el numero secreto [${secretNumber}] en [${i}] Intentos`);
    break;
  } else if (numberEnteredByUser > secretNumber) {
    alert(`Fallaste!! El numero secreto es MENOR`);
  } else if (numberEnteredByUser < secretNumber) {
    alert(`Fallaste!! El numero secreto es MAYOR`);
  }
}
