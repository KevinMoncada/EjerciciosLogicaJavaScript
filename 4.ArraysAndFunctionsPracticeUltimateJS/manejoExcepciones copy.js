



function division(numerador, denominador) {
  if (denominador === 0) {
    throw 'Invalido, el denominador no puede ser 0'
  }
  return (numerador / denominador);
}


let result;
try {
  result = division(4, 0);
} catch (caught) {
  console.log(caught)
}



console.log(result)
