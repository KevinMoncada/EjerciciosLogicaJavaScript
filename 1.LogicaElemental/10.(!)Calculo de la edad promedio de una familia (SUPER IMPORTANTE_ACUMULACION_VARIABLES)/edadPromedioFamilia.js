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


let numberOfFamilyMembers = parseInt(prompt(`De cuantas personas se compone su nucleo familiar?`));
let familyMemberAge;
let accumulationOfAges = 0;

print(`La cantidad de personas que conforman el nucleo familiar del usuario es de: ${numberOfFamilyMembers}`);

for (let i = 1; i <= numberOfFamilyMembers; i += 1) {
    console.log(i);
    familyMemberAge = parseInt(prompt(`Cual es la edad del familiar #${i}`));
    accumulationOfAges = (accumulationOfAges + familyMemberAge);

    print(`La edad del familiar #${i} es: ${familyMemberAge} Años`);
}

const averageAgeOfFamily = (accumulationOfAges / numberOfFamilyMembers);
print(`- - - - - - - - - - - - - - - - - - - - -`);
print(`La edad promedio de la familia es: ${averageAgeOfFamily} Años`);