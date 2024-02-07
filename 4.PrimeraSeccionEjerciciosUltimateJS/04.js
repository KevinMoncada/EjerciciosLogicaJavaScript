// crear una funcion que me permita saber la cantidad de numeros positivos y negativos dentro de un array

let listOfNumbers = [-73, 13, -3, 16, 83, -6, 92, 34, 15, -25, 66];

function countAmmountOfPositiveAndNegativeNumbers(inputArray) {
    let ammountOfPositiveNumbers = 0
    let ammountOfNegativeNumbers = 0
    for (let i = 0; i < inputArray.length; i += 1) {
        ((inputArray[i] > 0) ? ammountOfPositiveNumbers += 1 : ammountOfNegativeNumbers += 1);
    }

    return {
        ammountOfPositiveNumbers: ammountOfPositiveNumbers,
        ammountOfNegativeNumbers: ammountOfNegativeNumbers,
    }
}

let result = countAmmountOfPositiveAndNegativeNumbers(listOfNumbers);
console.log(result);
