//Construir una función que permita saber si X propiedad existe en un objeto

let literalObject = {
    name: 'Juan',
    age: 35,
    isActive: true,
    location: 'Medellin',
}


const checksPropertyExistence = function (obj, search) {
    (Object.keys(obj).includes(search)) ? console.log(true) : console.log(false);
}

checksPropertyExistence(literalObject, 'age')
checksPropertyExistence(literalObject, 'casa')


