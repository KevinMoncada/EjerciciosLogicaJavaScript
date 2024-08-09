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

function classifyAccordingToDataType(inputArray) {
  let strings = [];
  let numbers = [];
  let objects = [];
  for (const element of inputArray) {
    let dataTypeOfElements = typeof (element);
    if (dataTypeOfElements == 'string') {
      strings.push(element);
    }
    if (dataTypeOfElements == 'number') {
      numbers.push(element);
    }
    if (dataTypeOfElements == 'object') {
      objects.push(element);
    }
  }
  return ({ strings: strings, numbers: numbers, objects: objects });
}

let result = classifyAccordingToDataType(originalArray);
console.log(result);