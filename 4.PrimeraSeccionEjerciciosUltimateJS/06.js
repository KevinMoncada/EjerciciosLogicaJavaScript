// crear un algoritmo que tome un array de pares y devuelva un array de objetos, basicamente realizar el ejercicio anterior a la inversa


let pairsArray = [
    [131, { id: 131, name: 'Nicolas' }],
    [567, { id: 567, name: 'Ernesto' }],
    [987, { id: 987, name: 'Carlos' }],
    [764, { id: 764, name: 'Roberto' }],
];


function pairsArrayToObjectArray(inputArray) {
    return inputArray.map((element) => element[1])
}


console.log(pairsArrayToObjectArray(pairsArray));