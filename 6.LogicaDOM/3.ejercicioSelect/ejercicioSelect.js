// 1.INICIO
document.querySelector('#listaFrutas').addEventListener('change', mostrar);

// 2. FUNCION
function mostrar() {
  //TOMA DE DATOS
  let seleccionUser = document.querySelector('#listaFrutas').value;

  //SALIDA
  document.querySelector('#resultado').innerHTML = (`Fruta seleccionada: ${seleccionUser}`)
}