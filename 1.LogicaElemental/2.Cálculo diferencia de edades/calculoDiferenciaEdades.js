/* 
Cuántos años de diferencia tienes con tu hermano? Escribe un programa que muestre el mensaje ¨Nuestra diferencia de edad es¨, La respuesta puede dar negativa, sin duda. No olvides 
de usar las funciones saltarLinea e imprimir y de incluir la etiqueta <meta> para resolver  problemas de acentuación.
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
function calculeDiferenciaEdadHermanos(edadHermanoMayor, edadHermanoMenor) {
    return (edadHermanoMayor - edadHermanoMenor)
}



//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
// - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -


//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
let edadHermanoMayor = parseFloat(prompt(`Cual es la edad del hermano mayor?`));
let edadHermanoMenor = parseFloat(prompt(`Cual es la edad del hermano menor?`));

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
let diferenciaEdades = calculeDiferenciaEdadHermanos(edadHermanoMayor, edadHermanoMenor)

//LOOPS
// - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -


//INFO EN PANTALLA
document.write("<h3> Calculo diferencia Edades Hermanos </h3>");
print(`La edad del hermano Mayor es de: ${edadHermanoMayor} Años`);
print(`La edad del hermano Menor es de: ${edadHermanoMenor} Años`);
print(`La diferencia de edad entre los hermanos es de: ${diferenciaEdades} Años`)
