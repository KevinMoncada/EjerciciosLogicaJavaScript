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

function calculateIMC(weight, height) {
    return (weight / (height ** 2));
}



let userName = prompt(`Ingrese su nombre`);
let userWeight = parseFloat(prompt(`Ingrese su peso`));
let userHeight = parseFloat(prompt(`Ingrese su Altura`));
let userIMC = calculateIMC(userWeight, userHeight);
let userIMCClasification;

if (userIMC < 18.5) {
    userIMCClasification = `Insuficiencia Ponderal`;
} else if (userIMC >= 18.5 && userIMC <= 24.9) {
    userIMCClasification = `Intervalo Normal`;
} else if (userIMC >= 25) {
    userIMCClasification = `Sobrepeso`
}




print(`<h2>Calculadora IMC</h2>`);
print(`<strong>Datos del Usuario</strong>`);
print(`
    <strong>Nombre:</strong> ${userName} </br>
    <strong>Peso:</strong> ${userWeight} Kg </br>
    <strong>Altura:</strong> ${userHeight} Metros </br>
    <strong>Clasificación según la OMS:</strong> ${userIMCClasification}</br>
    `)

