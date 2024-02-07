// crear un algoritmo que tome un array de objetos y devuelva un array de pares, cada array de ese ultimo array debe tener un identificador y un objeto let exampleOfPairArray = [234, { id: 131, name: 'Nicolas' }];

let users = [
    { id: 131, name: 'Nicolas' },
    { id: 567, name: 'Ernesto' },
    { id: 987, name: 'Carlos' },
    { id: 764, name: 'Roberto' },
]

function objectsArrayToPairsArray(inputArray) {
    let newPairsArray = [];
    for (let i = 0; i < inputArray.length; i += 1) {
        let elements = [inputArray[i].id, inputArray[i]];
        newPairsArray.push(elements);
    }
    return newPairsArray;
}

let result = objectsArrayToPairsArray(users);
console.log(result);



