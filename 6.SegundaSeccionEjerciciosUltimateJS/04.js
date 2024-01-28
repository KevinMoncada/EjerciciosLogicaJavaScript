//Construir una función que permita saber si X propiedad existe en un objeto

let literalObject = {
    name: 'Juan',
    age: 35,
    isActive: true,
    location: 'Medellin',
}



function propEvaluation(obj, prop) {
    let evaluation = obj.hasOwnProperty(prop)
    return evaluation
}

console.log(propEvaluation(literalObject, 'casa'))