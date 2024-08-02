/* 
CREAR UN PROGRAMA QUE ME PERMITA CALCULAR LA EDAD PROMEDIO DE LOS INTEGRANTES DE UNA FAMILIA CUALQUIERA

RECORDEMOS QUE UN PROMEDIO ES IGUAL A LA SUMA DE TODOS LOS DATOS INVOLUCRADOS SOBRE LA CANTIDAD DE LOS MISMOS (PROMEDIO = (SUMATORIA DE DATOS)/CANTIDAD DE DATOS)
*/
//DECLARACION DE FUNCIONES
//1.WORK-FLOW FUNCTION'S
function print(text) {
    document.write(text);
    document.write("<br>");
}

function lineBreak() {
    document.write("<br>");
    document.write("<br>");
}
//

const userName = prompt(`Ingrese su nombre`);
let numberOfFamilyMembers = parseInt(prompt(`${userName}, De cuantas personas se conforma su nucleo familiar?`));

//INFO ON SCREEN
print(`<h2> Edad promedio de una Familia </h2>`);
print(`Nombre de la persona cabeza de familia: ${userName}`);
print(`Numero de personas que conforman el nucleo familiar: ${numberOfFamilyMembers}`);


let familiMembersAgeAcumulation = 0;
let familyMemberAge = 0;
for (let i = 1; i <= numberOfFamilyMembers; i += 1) {
    familyMemberAge = parseInt(prompt(`Cual es la edad del familiar #${i}?`));
    print(`Edad del familiar #${i}: ${familyMemberAge} Años`);
    console.log(familyMemberAge);
    familiMembersAgeAcumulation = (familiMembersAgeAcumulation + familyMemberAge);
    console.log({ familiMembersAgeAcumulation });
}

let averageAge = (familiMembersAgeAcumulation / numberOfFamilyMembers);

print(`Sumatoria de edades de todos los miembros de la familia: ${familiMembersAgeAcumulation} Años`);
print(`La edad promedio de la familia es: ${averageAge} Años`);





