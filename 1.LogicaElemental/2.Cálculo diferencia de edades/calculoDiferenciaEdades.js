/* 
Cuántos años de diferencia tienes con tu hermano? Escribe un programa que muestre el mensaje ¨Nuestra diferencia de edad es x Años¨.
 */
//WORK-FLOW FUNCTION'S
function print(text) {
    document.write(text);
    document.write("</br>");
}

function lineBreak() {
    document.write("</br>");
    document.write("</br>");
}

function calculateAgeDifference(olderAge, youngerAge) {
    return (olderAge - youngerAge);
}

const elderBrotherAge = parseInt(prompt(`Ingrese la edad del hermano mayor`));
const youngerBrotherAge = parseInt(prompt(`Ingrese la edad del hermano menor`));
let ageDifference = calculateAgeDifference(elderBrotherAge, youngerBrotherAge);

//INFO ON SCREEN
print(`<h2>Calculo diferencia de edades</h2>`);
print(`Nuestra deiferencia de edad es de <strong>${ageDifference} Años</strong>`);