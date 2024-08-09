//Construir una función que permita saber cuales propiedades de un objeto son metodos

let literalObject = {
    name: 'Juanito',
    age: 25,
    salute: () => { console.log(`Holaa`) },
    login: () => { console.log(`login`) },
    logout: function (params) {
    }
}


function getMethodsFromObject(object) {
    let metodos = []
    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
        if (typeof object[key] == 'function') {
            metodos.push(key)
        }
    }
    return metodos;
}

let result = getMethodsFromObject(literalObject);
console.log(result);






