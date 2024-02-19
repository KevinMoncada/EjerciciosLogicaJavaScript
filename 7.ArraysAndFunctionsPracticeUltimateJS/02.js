// Desarrollar una función que permita clasificar los elementos de un arreglo según sus tipos de datos. La función debe devolver un objeto que contenga las propiedades correspondientes a los tipos de datos presentes en el arreglo original, donde el valor de cada propiedad sea un arreglo con los elementos de ese tipo de dato.
let originalArray = [
  22,
  456,
  32,
  'Hola Mundo',
  'Chao Mundo',
  ['array anidado'],
  {},
]

function elementsClasification(inputArray) {
  let stringElements = inputArray.filter((element) => (typeof (element) === 'string'));
  let numberElements = inputArray.filter((element) => (typeof (element) === 'number'));
  let arrayElements = inputArray.filter((element) => (typeof (element) === 'array'));
  let objectElements = inputArray.filter((element) => (typeof (element) === 'object'));

  return {
    strings: stringElements,
    numbers: numberElements,
    arrays: arrayElements,
    objects: objectElements,
  }
}

let result = elementsClasification(originalArray);
console.log(result);