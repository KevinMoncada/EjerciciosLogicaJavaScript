let numeroSecreto;
let numeroIngresado;
let contadorDeIntentos = 0;
let campoNumeroIngresado = document.querySelector('#numeroIngresado');
let textoDinamico = document.querySelector('#textoDinamico');
let botonReinicio = document.querySelector('#reiniciar');
let botonInicio = document.querySelector('#intentar');
let formulario = document.querySelector('form');



condicionesIniciales();

//Eventos
botonInicio.addEventListener('click', realizarComparacion);
botonReinicio.addEventListener('click', condicionesIniciales);
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    realizarComparacion();
});


function generarNumeroSecreto() {
    return parseInt((Math.random() * 100) + 1);
}


function condicionesIniciales() {
    botonReinicio.setAttribute('disabled', true);
    botonInicio.removeAttribute('disabled');
    textoDinamico.textContent = 'Ingresa un número entero entre 1 y 100';
    numeroSecreto = generarNumeroSecreto();
    campoNumeroIngresado.value = "";
    contadorDeIntentos = 0;
}


function realizarComparacion() {
    contadorDeIntentos += 1;
    numeroIngresado = parseInt(campoNumeroIngresado.value);
    console.log(numeroIngresado);
    console.log({ contadorDeIntentos });
    if ((numeroIngresado < 1) || (numeroIngresado > 100)) {
        textoDinamico.textContent = 'Error!! Ingrese un número entero valido dentro del rango establecido (de 1 a 100)';
        campoNumeroIngresado.value = "";
    } else if (numeroIngresado > numeroSecreto) {
        textoDinamico.textContent = 'El numero secreto es menor';
        campoNumeroIngresado.value = "";
    } else if (numeroIngresado < numeroSecreto) {
        textoDinamico.textContent = 'El numero secreto es mayor';
        campoNumeroIngresado.value = "";
    } else if (numeroIngresado === numeroSecreto) {
        textoDinamico.textContent = `Felicidades!! Adivinaste el numero secreto(${numeroIngresado}) en ${contadorDeIntentos} intentos!!`;
        botonReinicio.removeAttribute('disabled');
        botonInicio.setAttribute('disabled', true);
        campoNumeroIngresado.value = "";
    }
}


