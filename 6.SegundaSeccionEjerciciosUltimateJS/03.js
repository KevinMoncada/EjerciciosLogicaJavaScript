//Construir una función que permita saber cuales propiedades de un objeto son metodos

let literalObject = {
    name: 'Juanito',
    age: 25,
    salute: () => { console.log(`Holaa`) },
    login: () => { console.log(`login`) },
    logout: function (params) {
    }
}

// for (i in literalObject) {
//     // console.log(i); //Nombre de la propiedad
//     // console.log(literalObject[i]);  //Valor de la propiedad i
//     console.log(`${i}: ${literalObject[i]}`) //Ambos juntos
// }


function getMethods(obj1) {
    for (key in obj1) {
        if (typeof (obj1[key]) == 'function') {
            console.log(key)
        }
    }
}

let result = getMethods(literalObject);
console.log(result);