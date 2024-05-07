/*  
Este programa, de acuerdo con la respuesta del usuario, debe mostrar el mensaje "Puedes conducir" o "No puedes conducir". 
Recuerda que puede conducir solo quien tiene 18 años o más y también quien tiene una licencia de conducir. 
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

const name = prompt(`Ingrese su nombre`);
const age = parseInt(prompt(`Ingrese su edad`));
const license = (prompt(`Tienes licencia de conduccion?`).toLowerCase());

if ((age >= 18) && ((license == 'si') || (license == 's'))) {
    alert(`Felicidades, Puedes conducir`);
} else {
    alert(`Lo siento, no puedes conducir`)
}