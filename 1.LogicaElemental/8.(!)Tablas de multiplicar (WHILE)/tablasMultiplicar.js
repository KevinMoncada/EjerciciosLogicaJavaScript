/* 
CREAR UN PROGRAMA QUE LE PERMITA AL USUARIO CALCULAR LA TABLA DE MULTIPLICAR DE CUALQUIER NUMERO HASTA EL MULTIPLO QUE DESEE DE LA FORMA MAS EFICIENTE POSIBLE
*/


function print(textoenpantalla) {
  document.write(textoenpantalla);
  document.write("<br>");
}

function saltarLinea() {
  document.write("<br>");
  document.write("<br>");
}

const numeroBase = parseInt(prompt(`Ingrese el numero del cual desea calcular las tablas de multiplicar`));
let multiploLimite = parseInt(prompt(`Hasta que multiplo desea calcular las tablas del ${numeroBase} ?`));

//USANDO WHILE

// let multiplicacion;
// let i = 0;
// while (i <= multiploLimite) {
//   multiplicacion = (numeroBase * i);
//   print(`${numeroBase} * ${i} = ${multiplicacion}`);
//   i += 1;
// }

//USANDO FOR

for (i = 0; i <= multiploLimite; i += 1) {
  multiplicacion = (numeroBase * i);
  print(`${numeroBase} * ${i} = ${multiplicacion}`);
}

