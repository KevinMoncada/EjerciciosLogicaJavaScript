//Construir una función que permita saber si el contenido de 2 objetos es similar, osea que nos devuelva true si los objetos evaluados tienen las mismas propiedades y los mismos valores y false en caso de que no sea asi


function similarityComparison(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] === obj2[key]) {
            return true;
        } else {
            return false;
        }
    }
}

let literalObject1 = { name: 'Juan', id: 2314 };
let literalObject2 = { name: 'Juan', id: 2314 };

let objectsComparision = similarityComparison(literalObject1, literalObject2);
console.log(objectsComparision);