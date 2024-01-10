// 1. EVENTO
document.querySelector('#boton').addEventListener('click', seraPar);

// 2. FUNCION
function seraPar() {
  // PROCESO
  let numero = (document.querySelector('#numeroIngresado').value);
  if (numero % 2 == 0) {
    document.querySelector('#resultado').innerHTML = (`El numero ingresado (${numero}) SI es par`);
  } else {
    document.querySelector('#resultado').innerHTML = (`El numero ingresado (${numero}) NO es par`);
  }
}