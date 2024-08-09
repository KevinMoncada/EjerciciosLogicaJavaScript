// Crear una Función que devuelva los valores absolutos de una lista de numeros (almacenados en un Array)

let listOfNumbers = [23, -25, -3, -1, 33, -8, -123123];

function calculateAbsValues(inputArray) {
  let absValues = inputArray.map((number) => Math.abs(number));
  return absValues;
}

let result = calculateAbsValues(listOfNumbers);
console.log(result);