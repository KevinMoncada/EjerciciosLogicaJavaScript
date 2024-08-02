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

const userName = prompt(`Hola, cual es tu nombre?`);
const hasALicense = (prompt(`${userName}, Tienes licencia de conduccion?`).toLowerCase());
const userAge = prompt(`Cual es tu edad?`);
const allowed = "Puedes conducir";
const notAllowed = "No puedes conducir";

if ((hasALicense == 'si' || hasALicense == 's') && (userAge >= 18)) {
    alert(allowed)
} else {
    alert(notAllowed)
}