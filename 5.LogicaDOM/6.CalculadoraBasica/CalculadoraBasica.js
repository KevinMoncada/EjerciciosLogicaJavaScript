//1. EVENTO
document.querySelector('#calcular').addEventListener('click', calculeResultado);

//2. FUNCION
function calculeResultado() {
  //TOMAR DATOS
  let numero1 = parseFloat(document.querySelector('#numero1').value);
  let numero2 = parseFloat(document.querySelector('#numero2').value);
  let operacion = document.querySelector('#operacion').value;

  let calculo;
  switch (operacion) {
    case 's':
      calculo = (numero1 + numero2)
      break;
    case 'r':
      calculo = (numero1 - numero2)
      break;
    case 'm':
      calculo = (numero1 * numero2)
      break;
    case 'd':
      calculo = (numero1 / numero2)
      break;
  }

  //3. SALIDA
  document.querySelector('#resultado').innerHTML = (`Resultado: ${calculo}`)
}