/*  
Este programa, de acuerdo con la respuesta del usuario, debe mostrar el mensaje "Puedes conducir" o "No puedes conducir". 
Recuerda que puede conducir solo quien tiene 18 años o más y también quien tiene una licencia de conducir. 
*/

//DECLARACION DE FUNCIONES
//1.WORK-FLOW FUNCTION'S
function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}

//2.FUNCIONES QUE REALIZAN PROCEDIMIENTOS MATEMATICOS (FORMULAS)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
const edadUsuario = parseInt(prompt(`Ingrese su Edad`));
const tieneLicencia = prompt(`Tiene Licencia de conducir? (True or False)`).toLowerCase();

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


//LOOPS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


//INFO EN PANTALLA
document.write(`<h2>Ejercicio 4 (Condicionales)</h2>`);
print(`Edad del Usuario: ${edadUsuario}`);
print(`Posee licencia de conducción?: ${tieneLicencia}`);

saltarLinea();

if ((edadUsuario >= 18) && (tieneLicencia == 'si' || tieneLicencia == 's')) {
    print(`Puede Conducir`);
} else {
    print(`No puede conducir`);
}
