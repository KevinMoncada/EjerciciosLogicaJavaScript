//1.EVENTO
document.querySelector("#boton").addEventListener('click', calculePresupuesto);

//2.FUNCION
function calculePresupuesto() {
  //TOMA DE DATOS
  let valorMonitor = parseFloat(document.querySelector('#monitor').value);
  let valorDisco = parseFloat(document.querySelector('#disco').value);
  let valorProcesador = parseFloat(document.querySelector('#procesador').value);

  //OPERACION
  let suma = (valorMonitor + valorDisco + valorProcesador);

  //RESULTADO
  document.querySelector('#resultado').innerHTML = (`El presupuesto es por un valor de: ${suma}$`);
}
