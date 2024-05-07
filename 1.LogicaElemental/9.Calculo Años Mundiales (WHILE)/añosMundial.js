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

// let yearInWhichThereWasWorldCup = firstYear;
const firstYear = 1930;
const limitYear = parseInt(prompt(`Hasta que año desea saber cuando se disputara o disputó una Copa Mundial de Futbol?`));

// while (yearInWhichThereWasWorldCup <= limitYear) {
//     print(`Hubo Copa Mundial de Futbol en el año: ${yearInWhichThereWasWorldCup}`);
//     yearInWhichThereWasWorldCup += 4;
// }

for (let yearInWhichThereWasWorldCup = firstYear; yearInWhichThereWasWorldCup <= limitYear; yearInWhichThereWasWorldCup += 4) {
    print(`Hubo Copa Mundial de Futbol en el año: ${yearInWhichThereWasWorldCup}`);
}