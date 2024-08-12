//Construir una función que permita saber si el valor de 2 objetos es idéntico, osea que nos devuelva true si los objetos evaluados tienen las mismas propiedades con los mismos valores y false en caso de que no sea asi

let literalObject1 = { name: 'Juan', id: 2314, location: 'Colombia', };
let literalObject2 = { name: 'Juan', id: 2314, location: 'Colombia', };

const comparePropertiesAndValues = function (obj1, obj2) {
  let equalKeysAcum = 0;
  let equalKeysValueAcum = 0;

  for (const key in obj1) {
    //Comparacion de los Nombres de las propiedades
    for (const key2 in obj2) {
      (key == key2) ? equalKeysAcum += 1 : null;
    }

    //Comparacion de los valores de las propiedades
    (obj1[key] === obj2[key]) ? equalKeysValueAcum += 1 : null;
  }
  if ((equalKeysAcum == (Object.keys(obj1)).length) && (equalKeysValueAcum == (Object.keys(obj1)).length)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

comparePropertiesAndValues(literalObject1, literalObject2);
