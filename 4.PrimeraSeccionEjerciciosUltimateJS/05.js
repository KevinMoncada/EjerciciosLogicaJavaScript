// crear un algoritmo que tome un array de objetos y devuelva un array de pares, cada array de ese ultimo array debe tener un identificador y un objeto let exampleOfPairArray = [234, { id: 131, name: 'Nicolas' }];

let users = [
    { id: 131, name: 'Nicolas' },
    { id: 567, name: 'Ernesto' },
    { id: 987, name: 'Carlos' },
    { id: 764, name: 'Roberto' },
]


function toPairArray(arrayInput) {
    let newArray = [];
    for (let i = 0; i < arrayInput.length; i += 1) {
        let newArrayElement = [arrayInput[i].id, arrayInput[i]];
        newArray.push(newArrayElement);
    }
    return newArray;
}

let result = toPairArray(users);
console.log(result);