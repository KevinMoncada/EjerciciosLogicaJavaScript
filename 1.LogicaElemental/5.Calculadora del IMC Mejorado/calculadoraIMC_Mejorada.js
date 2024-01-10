/* 
En este ejercicio vamos a desarollar una calculadora basica que permita a cualquier usuario (INTERACCION) calcular su IMC, 
recordemos que el IMC (INDICE DE MASA CORPORAL) = PESO/ALTURA^2 

A PARTIR DE AQUI AÑADIMOS TEMAS DEL CURSO #2

AHORA VAMOS A MEJORAR NUESTRO PROGRAMA, VAMOS A AÑADIR LA FUNCIONALIDAD DE QUE SEGUN EL IMC DEL USUARIO ESTE LE DIGA EN QUE RANGO SALUBRE SE ENCUENTRA
SEGUN LA CLASIFICACION ESTABLECIDA POR LA TABLA DE LA OMS (LA IMAGEN SE ENCUENTRA ADJUNTA EN LA CARPETA RAIZ DEL PROYECTO)
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
function calculeIMC(peso, altura) {
    return (peso / (altura ** 2));
}



//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
const nombreUsuario = prompt(`Hola! Cual es tu nombre?`);
const pesoUsuario = parseInt(prompt(`${nombreUsuario} por favor ingresa tu peso`));
const alturaUsuario = parseFloat(prompt(`Ahora ingresa tu altura`));

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
let userIMC = calculeIMC(pesoUsuario, alturaUsuario)

//LOOPS
// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


//INFO EN PANTALLA
document.write('<h2> Calculadora IMC </h2>');
print(`<h3> Datos Usuario </h3>`);
print(`Nombre: ${nombreUsuario}`);
print(`Peso: ${pesoUsuario} Kg`);
print(`Altura: ${alturaUsuario} Metros`);
saltarLinea();
print(`El IMC de ${nombreUsuario} es de: ${userIMC}Kg/M`);

switch (true) {
    case (userIMC < 18.5):
        print(`Insuficiencia Ponderal`);
        break;
    case (userIMC > 18.5 || userIMC < 24.9):
        print(`Intervalo Normal`);
        break;
    case (userIMC >= 25):
        print(`Sobrepeso`);
        break;
}

