// construir una función que nos permita tomar un elemento de un array conociendo su índice

let arrayExample = [23, 92, 83, 54, 76];


function getElementByIndx(inputArray, index) {
    return inputArray[index]
}

let result = getElementByIndx(arrayExample, 3)
console.log(result);