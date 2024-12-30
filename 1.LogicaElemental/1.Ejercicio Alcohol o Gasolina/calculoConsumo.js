/* 
Problema: un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un recorrido de 480 kilómetros. 
¿Cuál es la eficiencia del carro usando gasolina? o sea, ¿cuántos kilómetros recorre el carro por cada litro de gasolina? Para calcular la eficiencia: 
divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.

Por otro lado, si el carro usa alcohol como combustible, el mismo tanque de 40 litros hace un recorrido de 300 kilómetros. ¿Cuál es el la eficiencia del carro usando alcohol? 
 */


//WORKFLOW-FUNCTIONS
function print(textOnScreen) {
  document.write(textOnScreen);
  document.write("</br>");
}

function lineBreak() {
  document.write("</br>");
  document.write("</br>");
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function calculateEfficiency(distanceTraveled, fuelUsed) {
  return (distanceTraveled / fuelUsed);
}

const tankCapacity = 40;
const tankFullGasoline = 40;
const tankFullAlcohol = 40;
const distanceTraveledGasoline = 480;
const distanceTraveledAlcohol = 300;

let efficiencyWithGasoline = calculateEfficiency(distanceTraveledGasoline, tankFullGasoline);
let efficiencyWithAlcohol = calculateEfficiency(distanceTraveledAlcohol, tankFullAlcohol);

//INFO ON SCREEN
print(`<h2>Calculo de Eficiencia</h2>`);
print(`Eficiencia usando <strong>GASOLINA</strong> como combuistible: ${efficiencyWithGasoline} Km/L`);
print(`Eficiencia usando <strong>ALCOHOL</strong> como combuistible: ${efficiencyWithAlcohol} Km/L`);
