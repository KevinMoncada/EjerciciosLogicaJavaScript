// crear una función que tome un array de objetos y devuelva un array de pares, cada array de ese ultimo array debe tener un identificador y un objeto, el id debe extraerse del propio objeto original, Ejemplo: 
// let exampleOfPairArray = [
//     [131, { id: 131, name: 'Nicolas' }],
//     [567, { id: 567, name: 'Ernesto' }],
//     [987, { id: 987, name: 'Carlos' }],
//     [764, { id: 764, name: 'Roberto' }],
// ];


let users = [
    { id: 131, name: 'Nicolas' },
    { id: 567, name: 'Ernesto' },
    { id: 987, name: 'Carlos' },
    { id: 764, name: 'Roberto' },
]



function toPairsArray(inputArray) {
    let transform = inputArray.map((element) => [element.id, element]);
    return transform
}

let result = toPairsArray(users);
console.log(result);