// construir una función que nos permita tomar un elemento de un array conociendo su índice

let arrayExample = [23, 92, 83, 54, 76];

function getElementOfArrayByIndx(inputArray, index) {
    let element = inputArray[index];
    return element
}

let result = getElementOfArrayByIndx(arrayExample, 2);
console.log(result);

