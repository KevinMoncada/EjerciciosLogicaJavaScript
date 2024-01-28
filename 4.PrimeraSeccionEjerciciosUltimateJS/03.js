// construir una funcion que nos devuelva el numero mayor y menor de un array numerico

let arrayExample = [234, -22, 98, 12, 0, -34, 65, -5, 45, 88]

function getMinAndMaxArrayValues(inputArray) {
    let maxNumber = Math.max(...inputArray)
    let minNumber = Math.min(...inputArray)

    return {
        maxNumberFromArray: maxNumber,
        minNumberFromArray: minNumber,
    }
}

let result = getMinAndMaxArrayValues(arrayExample);
console.log(result)