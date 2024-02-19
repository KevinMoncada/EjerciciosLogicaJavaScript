//Construir una función que permita saber si el valor de 2 objetos es idéntico, osea que nos devuelva true si los objetos evaluados tienen las mismas propiedades con los mismos valores y false en caso de que no sea asi

let literalObject1 = { name: 'Juan', id: 2314, location: 'Colombia', };
let literalObject2 = { name: 'Juan', id: 2314, location: 'Colombia', };




function compareObjects(obj1, obj2) {
  let ammountOfEqualProps = 0;
  let ammountOfUnequalProps = 0;
  for (const prop in obj1) {
    if (obj1[prop] === obj2[prop]) {
      ammountOfEqualProps += 1;
    } else {
      ammountOfUnequalProps += 1;
    }
  }

  if (Object.keys(obj1).length === ammountOfEqualProps) {
    return true;
  } else {
    return false;
  }
}

let result = compareObjects(literalObject1, literalObject2);
console.log(result);