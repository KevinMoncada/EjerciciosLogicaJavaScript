/* 
CREAR UN PROGRAMA QUE LE PERMITA AL USUARIO CALCULAR LA TABLA DE MULTIPLICAR DE CUALQUIER NUMERO HASTA EL MULTIPLO QUE DESEE DE LA FORMA MAS EFICIENTE POSIBLE
*/

//DECLARACION DE FUNCIONES
//1.WORK-FLOW FUNCTION'S
function print(text) {
  document.write(text);
  document.write("<br>");
}

function lineBreak() {
  document.write("<br>");
  document.write("<br>");
}
//


const baseNumber = parseInt(prompt(`Hola, Ingrese el numero del cual desea calcular las tablas de multiplicar`));
const limitNumber = parseInt(prompt(`Hasta que multiplo desea calcular las tablas?`));
// let multiple = 0;
let result;

print(`<h2>Calculo Tablas de Multiplicar</h2>`)


// while (multiple <= limitNumber) {
//   result = (multiple * limitNumber);
//   print(` ${baseNumber} * ${multiple} = ${result}`);
//   multiple++;
// }

for (let multiple = 0; multiple <= limitNumber; multiple++) {
  result = (multiple * limitNumber);
  print(` ${baseNumber} * ${multiple} = ${result}`);
}
