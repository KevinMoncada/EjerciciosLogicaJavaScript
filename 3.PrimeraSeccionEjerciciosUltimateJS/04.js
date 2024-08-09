// crear una funcion que me permita saber la cantidad de numeros positivos y negativos dentro de un array

let listOfNumbers = [-73, 13, -3, 16, 83, -6, 92, 34, 15, -25, 66];



function calculateAmmountOfPositiveAndNegatives(array) {
    let positiveNumbers = array.filter(number => number > 0);
    let negativeNumbers = array.filter(number => number < 0);
    return ({ positiveNumbers, negativeNumbers })
}

let result = calculateAmmountOfPositiveAndNegatives(listOfNumbers);
console.log(result);