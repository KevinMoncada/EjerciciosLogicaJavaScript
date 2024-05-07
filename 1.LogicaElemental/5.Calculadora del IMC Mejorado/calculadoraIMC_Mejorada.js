/* 
En este ejercicio vamos a desarollar una calculadora basica que permita a cualquier usuario (INTERACCION) calcular su IMC, 
recordemos que el IMC (INDICE DE MASA CORPORAL) = PESO/ALTURA^2 

A PARTIR DE AQUI AÑADIMOS TEMAS DEL CURSO #2

AHORA VAMOS A MEJORAR NUESTRO PROGRAMA, VAMOS A AÑADIR LA FUNCIONALIDAD DE QUE SEGUN EL IMC DEL USUARIO ESTE LE DIGA EN QUE RANGO SALUBRE SE ENCUENTRA
SEGUN LA CLASIFICACION ESTABLECIDA POR LA TABLA DE LA OMS (LA IMAGEN SE ENCUENTRA ADJUNTA EN LA CARPETA RAIZ DEL PROYECTO)
*/

//WORK-FLOW FUNCTIONS
function print(text) {
    document.write(text);
    document.write('</br>');
}

function lineBreak() {
    document.write('</br>');
}
//

function calculateIMC(weight, height) {
    return (weight / (height ** 2));
}


const userName = prompt(`Bienvenido!! Cual es su nombre?`);
const userWeight = parseFloat(prompt(`Ingrese su peso`));
const userHeight = parseFloat(prompt(`Ingrese su Altura`));
const userIMC = calculateIMC(userWeight, userHeight);
let userIMCCategory;

switch (true) {
    case (userIMC < 18.5):
        userIMCCategory = `Insuficiencia ponderal`;
        break;
    case ((userIMC > 18.5) && (userIMC < 24.9)):
        userIMCCategory = `Intervalo Normal`;
        break;
    case (userIMC > 24.9):
        userIMCCategory = `Sobrepeso`;
        break;
}



//INFO ON SCREEN
print(`<h2>Calculadora IMC</h2>`);
print(`Usuario: ${userName}`);
print(`Peso del Usuario: ${userWeight}Kg`);
print(`Altura del Usuario: ${userHeight}cm`);
print(`IMC del usuario: ${userIMC}`);
print(`Clasificación según la OMS: ${userIMCCategory}`);

