/* 
CREAR UN ALGORITMO QUE IMPRIMA TODOS LOS NUMEROS PARES DEL 0 AL 100 Y AL FINAL MUESTRE LA PALABRA FIN
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

const start = 0;
const end = 100;
let pairNumbers;


for (pairNumbers = start; pairNumbers <= end; pairNumbers += 2) {
    print(pairNumbers);
}