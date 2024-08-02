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


const numberToCalculateTables = parseInt(prompt(`De que numero desea calcular las tablas de multiplicar?`));
const limitMultiple = parseInt(prompt(`Hasta que multiplo desea calcular las tablas del ${numberToCalculateTables}?`));
print(`Numero base al cual se le calcularan las tablas: ${numberToCalculateTables}`);
print(`Multiplo limite: ${limitMultiple}`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`);


//Usando While
// let i = 0;
// let result;
// while (i <= limitMultiple) {
//   //Calculation
//   result = (numberToCalculateTables * i);

//   //Info on Screen
//   print(`${numberToCalculateTables} * ${i} = ${result}`);

//   i += 1;
// }

//Usando For
let result;
for (let i = 0; i <= limitMultiple; i += 1) {
  //Calculation
  result = (numberToCalculateTables * i);
  //   //Info on Screen
  print(`${numberToCalculateTables} * ${i} = ${result}`);
}