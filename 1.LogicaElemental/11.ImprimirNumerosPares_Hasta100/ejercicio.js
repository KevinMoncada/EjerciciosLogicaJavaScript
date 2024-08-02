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


for (let i = 0; i <= 100; i += 2) {
    print(i)
}