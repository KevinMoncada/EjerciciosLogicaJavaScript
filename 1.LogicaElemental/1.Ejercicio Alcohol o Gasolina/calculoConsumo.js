/* 
Problema: un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un recorrido de 480 kilómetros. 
¿Cuál es la eficiencia del carro usando gasolina? o sea, ¿cuántos kilómetros recorre el carro por cada litro de gasolina? Para calcular la eficiencia: 
divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.

Por otro lado, si el carro usa alcohol como combustible, el mismo tanque de 40 litros hace un recorrido de 300 kilómetros. ¿Cuál es el la eficiencia del carro usando alcohol? 
 */

//WORK-FLOW FUNCTION'S
function print(text) {
  document.write(text);
  document.write('</br>');
}

function lineBreak() {
  document.write('</br>');
  document.write('</br>');
}

//
function efficiency(distance, fuelUsed) {
  return distance / fuelUsed;
}

const tankCapacity = 40;
const gasolineAsFuel = 40;
const distanceGasoline = 480;
const alcoholAsFuel = 40;
const distanceAlcohol = 300;

let efficiencyUsingGasoline = efficiency(distanceGasoline, gasolineAsFuel);
let efficiencyUsingAlcohol = efficiency(distanceAlcohol, alcoholAsFuel);

//INFO ON SCREEN
print(`<h2>Ejercicio Eficiencia Combustible</h2>`);
print(`La eficiencia del vehiculo usando Gasolina como combustible es de: ${efficiencyUsingGasoline}Km/L`);
print(`La eficiencia del vehiculo usando Alcohol como combustible es de: ${efficiencyUsingAlcohol}Km/L`);


