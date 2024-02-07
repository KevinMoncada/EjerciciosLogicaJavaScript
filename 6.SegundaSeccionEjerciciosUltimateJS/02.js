//Construir una función que permita saber si el valor de 2 objetos es idéntico, osea que nos devuelva true si los objetos evaluados tienen las mismas propiedades con los mismos valores y false en caso de que no sea asi

let literalObject1 = { name: 'Juan', id: 2314, location: 'Colombia', };
let literalObject2 = { name: 'Juan', id: 2314, location: 'Colombia', };




function compareObjects(obj1, obj2) {
  let propertiesEqualValue = 0;
  let propertiesWithDifferentValue = 0;
  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      propertiesEqualValue += 1;
    } else {
      propertiesWithDifferentValue += 1;
    }
  }
  if (propertiesWithDifferentValue == 0) {
    return true;
  }
  if (propertiesWithDifferentValue != 0) {
    return false;
  }
}


let result = compareObjects(literalObject1, literalObject2);
console.log(result)