// construir una funcion que nos devuelva el numero mayor y menor de un array numerico

let arrayExample = [234, -22, 98, 12, 0, -34, 65, -5, 45, 88]


let getMaxAndMinElementsFtomArray = function (inputArray) {
    let maxNumber = Math.max(...inputArray);
    let minNumber = Math.min(...inputArray);
    return [{ maxNumber }, { minNumber }];
}

let result = getMaxAndMinElementsFtomArray(arrayExample);
console.log(result);