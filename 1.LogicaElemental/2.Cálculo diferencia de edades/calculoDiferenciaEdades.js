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


function calculateAgeDifference(olderBrotherAge, youngerBrotherAge) {
    return (olderBrotherAge - youngerBrotherAge);
}


let olderBrotherAge = prompt(`Ingrese la edad del hermano MAYOR`);
let youngerBrotherAge = prompt(`Ingrese la edad del hermano MENOR`);
let ageDifference = calculateAgeDifference(olderBrotherAge, youngerBrotherAge);


print(`<h2>Calculo diferencia de edades</h2>`);
print(`Edad hermano MAYOR: ${olderBrotherAge} Años`);
print(`Edad hermano MENOR: ${youngerBrotherAge} Años`);
lineBreak();
print(`La diferencia de edad entre los hermanos es de: ${ageDifference} Años`)

