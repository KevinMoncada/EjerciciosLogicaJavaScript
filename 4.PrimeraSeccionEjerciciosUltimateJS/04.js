// crear una funcion que me permita saber la cantidad de numeros positivos y negativos dentro de un array

let listOfNumbers = [-73, 13, -3, 16, 83, -6, 92, 34, 15, -25, 66];



function getPositiveAndNegativeNumbersFromArray(inputArray) {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    for (let i = 0; i < inputArray.length; i += 1) {
        (inputArray[i] > 0) ? positiveNumbers += 1 : negativeNumbers += 1;
    }
    return {
        amountOfPositiveNumbers: positiveNumbers,
        amountOfNegativeNumbers: negativeNumbers,
    }
}

let result = getPositiveAndNegativeNumbersFromArray(listOfNumbers);
console.log(result);