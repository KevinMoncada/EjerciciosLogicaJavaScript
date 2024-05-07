// crear una función que me permita saber cual es el mayor de los numeros de una lista


let numbersList = [23, 45, 66, 192, 456, 233];

function getMaxNumber(inputArray) {
    return Math.max(...inputArray)
}

let result = getMaxNumber(numbersList)
console.log(result);