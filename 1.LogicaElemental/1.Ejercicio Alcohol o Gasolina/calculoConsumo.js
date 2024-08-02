/* 
Problema: un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un recorrido de 480 kilómetros. 
¿Cuál es la eficiencia del carro usando gasolina? o sea, ¿cuántos kilómetros recorre el carro por cada litro de gasolina? Para calcular la eficiencia: 
divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.

Por otro lado, si el carro usa alcohol como combustible, el mismo tanque de 40 litros hace un recorrido de 300 kilómetros. ¿Cuál es el la eficiencia del carro usando alcohol? 
 */


//WORKFLOW FUNCTION'S
function print(text) {
  document.write(text);
  document.write(`<br>`);
}

function lineBreak() {
  document.write(`<br>`);
  document.write(`<br>`);
}

function calculateEfficiency(distanceTraveled, totalFuelUsed) {
  return (distanceTraveled / totalFuelUsed);
}

const totalCapacityOfTank = 40;
const fullTankWithGasoline = 40;
const distanceTraveledUsingGasoline = 480;
const fullTankWithAlcohol = 40;
const distanceTraveledUsingAlcohol = 300;

let efficiencyUsingGasoline = calculateEfficiency(distanceTraveledUsingGasoline, fullTankWithGasoline);
let efficiencyUsingAlcohol = calculateEfficiency(distanceTraveledUsingAlcohol, fullTankWithAlcohol);

//INFO ON SCREEN
print(`<h2>Calculo de Eficiencia</h2>`);
print(`La eficiencia del motor usando <strong>Gasolina</strong> fue de: ${efficiencyUsingGasoline}Km/L`);
print(`La eficiencia del motor usando <strong>Alcohol</strong> fue de: ${efficiencyUsingAlcohol}Km/L`);

