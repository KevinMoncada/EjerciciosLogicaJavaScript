// construir una funcion que nos devuelva el numero mayor y menor de un array numerico

let arrayExample = [234, -22, 98, 12, 0, -34, 65, -5, 45, 88]

function getMaxAndMinNumbers(inputArray) {
    let maxNumber = Math.max(...inputArray);
    let minNumber = Math.min(...inputArray);
    // return (`Número mayor: ${maxNumber}, Número menor: ${minNumber}`);
    return ({ maxNumber, minNumber })
}

let result = getMaxAndMinNumbers(arrayExample);
console.log(result);