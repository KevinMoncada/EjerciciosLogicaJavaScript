// construir una función que nos permita tomar un elemento de un array conociendo su índice

let arrayExample = [23, 92, 83, 54, 76];

function getElementByIndex(array, index) {
    let element = array[index];
    return (element);
}

let result = getElementByIndex(arrayExample, 0)
console.log(result);