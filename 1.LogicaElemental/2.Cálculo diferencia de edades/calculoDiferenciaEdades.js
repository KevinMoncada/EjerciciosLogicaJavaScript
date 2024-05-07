/* 
Cuántos años de diferencia tienes con tu hermano? Escribe un programa que muestre el mensaje ¨Nuestra diferencia de edad es x Años¨.
 */

//WORK-FLOW FUNCTIONS
function print(text) {
    document.write(text);
    document.write(`</br>`);
}

function lineBreak() {
    document.write('</br>');
    document.write('</br>');
}

function calculateDifference(ageOlder, ageYounger) {
    return (ageOlder - ageYounger);
}


const olderBrotherAge = parseInt(prompt(`Ingrese la edad del hermano Mayor`));
const youngerBrotherAge = parseInt(prompt(`Ingrese la edad del hermano Menor`));
const ageDifference = calculateDifference(olderBrotherAge, youngerBrotherAge);

//INFO ON SCREEN
print(`<h2>Ejercicio 2 Diferencia de edades</h2>`);
print(`<strong>Edad Hermano Mayor:</strong> ${olderBrotherAge}`);
print(`<strong>Edad Hermano Menor:</strong> ${youngerBrotherAge}`);
lineBreak();
print(`Diferencia de edad: ${ageDifference} Años`);
