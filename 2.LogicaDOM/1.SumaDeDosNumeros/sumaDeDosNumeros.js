//. 1 CREAR EVENTO
document.querySelector('#boton').addEventListener('click', sumarNumeros);


//. 2 FUNCIÓN
function sumarNumeros() {
  //PROCESO
  let primerNumero = parseFloat(document.querySelector('#numero1').value);
  let segundoNumero = parseFloat(document.querySelector('#numero2').value);
  let operacion = (primerNumero + segundoNumero);

  //SALIDA
  document.querySelector('#resultado').innerHTML = `El resultado de la operacion solicitada es: ${operacion}`;

}