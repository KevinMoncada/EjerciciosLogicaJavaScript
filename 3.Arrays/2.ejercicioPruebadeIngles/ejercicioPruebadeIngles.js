//1. EVENTO
document.querySelector('#boton').addEventListener('click', revision);

//2. FUNCION
function revision() {
  //TOMAR DATOS
  let respuestas = [document.querySelector('#pregunta1').value, document.querySelector('#pregunta2').value, document.querySelector('#pregunta3').value, document.querySelector('#pregunta4').value];


  //OPERACION
  let correctas = 0;
  let malas = 0;
  for (let i = 0; i < respuestas.length; i += 1) {
    if (respuestas[i] == 'true') {
      correctas += 1;
    } else {
      malas += 1;
    }
  }

  //SALIDA
  document.querySelector('#resultado').innerHTML = (`Respuestas Buenas: ${correctas} <br>
  Respuestas Malas: ${malas}
  `)
}