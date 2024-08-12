//Crear una función que permita dividir 2 numeros, debe emplearse manejo de excepciones y validaciones para anticiparse a posibles errores

const divide = function (num, den) {
  if (den == 0) {
    throw new Error("Error, no es posible dividir por 0");
  }
  return (num / den);
}

let result;

try {
  result = divide(23, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
}
