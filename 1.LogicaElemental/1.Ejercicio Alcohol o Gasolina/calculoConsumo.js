/* 
Problema: un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un recorrido de 480 kilómetros. 
¿Cuál es la eficiencia del carro usando gasolina? o sea, ¿cuántos kilómetros recorre el carro por cada litro de gasolina? Para calcular la eficiencia: 
divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.

Por otro lado, si el carro usa alcohol como combustible, el mismo tanque de 40 litros hace un recorrido de 300 kilómetros. ¿Cuál es el la eficiencia del carro usando alcohol? 
 */

//DECLARACION DE FUNCIONES
//1.WORK-FLOW FUNCTION'S
function saltarLinea() {
  document.write('<br>');
  document.write('<br>');
}

function print(textoEnPantalla) {
  document.write(textoEnPantalla);
  document.write('<br>');
}

//2.FUNCIONES QUE REALIZAN PROCEDIMIENTOS MATEMATICOS (FORMULAS)
function calculeEficiencia(distanciaRecorrida, combustibleEmpleado) {
  return (distanciaRecorrida / combustibleEmpleado);
}



//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
const capacidadTanque = 40;
const gasolinaEmpleada = 40;
const distanciaRecorridaGasolina = 480;
const alcoholEmpleado = 40;
const distanciaRecorridaAlcohol = 300;

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
// - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
let eficienciaGasolina = calculeEficiencia(distanciaRecorridaGasolina, gasolinaEmpleada);
let eficienciaAlcohol = calculeEficiencia(distanciaRecorridaAlcohol, alcoholEmpleado);

//LOOPS
// - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -  - - - - -


//INFO EN PANTALLA
document.write("<h3> Calculo Eficiencia </h3>");
print(`La eficiencia usando gasolina es de: ${eficienciaGasolina} Km/L`);
print(`La eficiencia usando alcohol es de: ${eficienciaAlcohol} Km/L`);