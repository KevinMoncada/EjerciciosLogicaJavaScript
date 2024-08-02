/* 
VAMOS A CREAR UN PROGRAMA QUE ME PERMITA CALCULAR LOS AÑOS EN LOS CUALES HUBO MUNDIAL DE LA FIFA, DESDE SU INICIO HASTA UN AÑO LIMITE DEFINIDO ARBITRARIAMENTE POR EL USUARIO 
(RECORDEMOS QUE LOS MUNDIALES SE CELEBRAN CADA CUATRO AÑOS Y EL PRIMER MUNDIAL FUE EN 1930) 

NOTAS:
- EL OBJETIVO DE TENER UNA FECHA LIMITE ES PARA EVITAR QUE EL PROGRAMA SE CONVIERTA EN UN BUCLE INFINITO DE PROCESAMIENTO INCAPAZ DE SALIR DE LA CONDICION QUE DEFINIMOS, SI ESTO OCURRE 
ES MUY PROBABLE QUE VSCODE TERMINE CRASHEANDO O INCLUSO QUE SE CONGELE EL PC
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

const firstYearOfWorldCup = 1930;
let limitYear = parseInt(prompt(`Hasta que Año desea calcular la fecha de los Mundiales?`));

for (let i = firstYearOfWorldCup; i <= limitYear; i += 4) {
    print(`Se disputo una Copa Mundial de la FIFA en el año: ${i}`)
}