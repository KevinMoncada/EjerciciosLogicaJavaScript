// Crear una Función que devuelva los valores absolutos de una lista de numeros (almacenados en un Array)

let listOfNumbers = [23, -25, -3, -1, 33, -8, -123123];

const absNewArray = function (inputArray) {
  return inputArray.map((element) => Math.abs(element))
}

let result = absNewArray(listOfNumbers)
console.log(result);