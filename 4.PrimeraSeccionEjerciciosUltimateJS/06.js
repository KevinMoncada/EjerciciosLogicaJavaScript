// crear un algoritmo que tome un array de pares y devuelva un array de objetos, basicamente realizar el ejercicio anterior a la inversa


let pairsArray = [
    [131, { id: 131, name: 'Nicolas' }],
    [567, { id: 567, name: 'Ernesto' }],
    [987, { id: 987, name: 'Carlos' }],
    [764, { id: 764, name: 'Roberto' }],
];


function pairsArrayToObjectsArray(inputArray) {
    let newObjectsArray = [];
    for (let i = 0; i < inputArray.length; i += 1) {
        let secondIndx = 1;
        let element = inputArray[i][secondIndx];
        newObjectsArray.push(element);
    }
    return newObjectsArray;
}

let result = pairsArrayToObjectsArray(pairsArray)
console.log(result);



