/* 
VAMOS A CREAR UN PROGRAMA QUE ME PERMITA CALCULAR LOS AÑOS EN LOS CUALES HUBO MUNDIAL DE LA FIFA, DESDE SU INICIO HASTA UN AÑO LIMITE DEFINIDO ARBITRARIAMENTE POR EL USUARIO 
(RECORDEMOS QUE LOS MUNDIALES SE CELEBRAN CADA CUATRO AÑOS Y EL PRIMER MUNDIAL FUE EN 1930) 

NOTAS:
- EL OBJETIVO DE TENER UNA FECHA LIMITE ES PARA EVITAR QUE EL PROGRAMA SE CONVIERTA EN UN BUCLE INFINITO DE PROCESAMIENTO INCAPAZ DE SALIR DE LA CONDICION QUE DEFINIMOS, SI ESTO OCURRE 
ES MUY PROBABLE QUE VSCODE TERMINE CRASHEANDO O INCLUSO QUE SE CONGELE EL PC

 */

//1.WORK-FLOW FUNCTION'S
function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}


let añoInicioMundiales = 1930;
let fechaLimite = parseInt(prompt(`Hasta que año desea saber las fechas en que se disputaron copas mundiales?`))


//USANDO WHILE

// let x = añoInicioMundiales
// while (x <= fechaLimite) {
//     print(`Hubo mundial en el año ${x}`)
//     x += 4;
// }

//USANDO FOR

for (let index = añoInicioMundiales; index <= fechaLimite; index += 4) {
    print(`Hubo mundial en el año ${index}`)
}



