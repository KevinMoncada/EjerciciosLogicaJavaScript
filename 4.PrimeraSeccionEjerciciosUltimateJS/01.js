// crear una función que me permita saber cual es el mayor de 2 números



let listOfNumbers = [23, 67, 99, 256, 402];


function getMaxNumber(inputArray) {
    let maxNumber = Math.max(...inputArray);
    return maxNumber;
}

let result = getMaxNumber(listOfNumbers);
console.log(result)
