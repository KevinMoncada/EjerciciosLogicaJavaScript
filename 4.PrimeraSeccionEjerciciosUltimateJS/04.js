// crear una funcion que me permita saber la cantidad de numeros positivos y negativos dentro de un array

let listOfNumbers = [-73, 13, -3, 16, 83, -6, 92, 34, 15, -25, 66];

const countAmmountOfPositiveAndNegativeNumbers = function (inputArray) {
    let positiveNumbersFromArray = inputArray.filter((number) => number > 0);
    let negativeNumbersFromArray = inputArray.filter((number) => number < 0);
    return { positiveNumbersFromArray: positiveNumbersFromArray.length, negativeNumbersFromArray: negativeNumbersFromArray.length }
}

let result = countAmmountOfPositiveAndNegativeNumbers(listOfNumbers);
console.log(result);


