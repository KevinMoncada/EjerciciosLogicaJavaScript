//Construir una función que permita saber cuales propiedades de un objeto son metodos

let literalObject = {
    name: 'Juanito',
    age: 25,
    salute: () => { console.log(`Holaa`) },
    login: () => { console.log(`login`) },
    logout: function () {
    }
}

const getMethodsFromObject = function (obj1) {
    for (const key in obj1) {
        ((typeof (obj1[key])) == 'function') ? console.log(`La propiedad ${key} es un Metodo`) : console.log(`La propiedad ${key} NO un Metodo`);
    }
}

getMethodsFromObject(literalObject);