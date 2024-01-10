/* 
CREAR UN PROGRAMA QUE ME PERMITA CALCULAR LA EDAD PROMEDIO DE LOS INTEGRANTES DE UNA FAMILIA CUALQUIERA

RECORDEMOS QUE UN PROMEDIO ES IGUAL A LA SUMA DE TODOS LOS DATOS INVOLUCRADOS SOBRE LA CANTIDAD DE LOS MISMOS (PROMEDIO = (SUMATORIA DE DATOS)/CANTIDAD DE DATOS)
*/
function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}

print(`<h4>Calculo del promedio de edades de una familia</h4>`);

let cantidadIntegrantesFamilia = parseInt(prompt(`¿De cuántas personas se conforma tu núcleo familiar?`));
print(`El Nucleo familiar del Usuario se conforma por: ${cantidadIntegrantesFamilia} Integrantes`)

let i = 1;
let edadIntegranteFamilia;
let acumulacionEdadesFamilia = 0;
while (i <= cantidadIntegrantesFamilia) {
    edadIntegranteFamilia = parseInt(prompt(`¿Cuál es la edad del familiar #${i}?`));
    acumulacionEdadesFamilia = (acumulacionEdadesFamilia + edadIntegranteFamilia);
    alert(`Edad del Familiar #${i}: ${edadIntegranteFamilia}`);
    print(`Edad del Familiar #${i}: ${edadIntegranteFamilia}`);
    i += 1;
}
print(` - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`);
print(`La suma de las edades de todos los miembros de la familia es de: ${acumulacionEdadesFamilia} `);

let promedioEdadesFamilia = (acumulacionEdadesFamilia / cantidadIntegrantesFamilia);
print(`La edad promedio de los integrantes de la familia es de: ${promedioEdadesFamilia}`);
