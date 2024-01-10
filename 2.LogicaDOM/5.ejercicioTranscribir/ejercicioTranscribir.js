// 1. EVENTO
document.querySelector('#textoIngresado').addEventListener('input', mostrar);

// 2. FUNCION
function mostrar() {
  //TOMA DE DATOS
  let textoIngresado = document.querySelector('#textoIngresado').value;

  //SALIDA
  document.querySelector('#resultado').innerHTML = (`${textoIngresado}`)
}