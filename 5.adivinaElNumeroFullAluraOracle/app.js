let numerosSorteados = [];
let i = 1;


function generarNumero() {
    let numeroAleatorio = parseInt((Math.random() * 100) + 1);
    if (numerosSorteados.includes(numeroAleatorio)) {
        return generarNumero()
    } else {
        numerosSorteados.push(numeroAleatorio);
        return (numeroAleatorio);
    }
}
let numeroAleatorioGenerado = generarNumero();


let mensajeSalida = document.getElementById(`textoDinamico`);
function condicionesIniciales() {
    mensajeSalida.innerHTML = `Ingresa un número entero entre 1 y 100`
}
condicionesIniciales();

function comparacionNumeros() {
    let numeroIngresadoUsuario = document.getElementById(`numeroIngresado`).value;
    switch (true) {
        case (numeroIngresadoUsuario > 100 || numeroIngresadoUsuario < 1):
            mensajeSalida.innerHTML = `ERROR!! Ingrese un número valido #Intentos:${i}`;
            break;
        case (numeroIngresadoUsuario == numeroAleatorioGenerado):
            mensajeSalida.innerHTML = `Felicidades!! Adivinaste el número secreto (${numeroAleatorioGenerado}) #Intentos:${i}`;
            document.getElementById(`reiniciar`).removeAttribute(`disabled`);
            document.getElementById(`intentar`).setAttribute('disabled', true);
            i = 1;
            break;
        case (numeroIngresadoUsuario > numeroAleatorioGenerado):
            mensajeSalida.innerHTML = `ERROR!! El número ingresado es Menor #Intentos:${i}`;
            break;
        case (numeroIngresadoUsuario < numeroAleatorioGenerado):
            mensajeSalida.innerHTML = `ERROR!! El número ingresado es Mayor #Intentos:${i}`;
            break;
    }
    i += 1;
    numeroIngresadoUsuario = document.getElementById(`numeroIngresado`).value = ''
}

function reiniciar() {
    condicionesIniciales();
    numeroAleatorioGenerado = generarNumero();
    document.getElementById(`intentar`).removeAttribute(`disabled`);
    mensajeSalida.innerHTML = `Ingresa un número entero entre 1 y 100`
    i = 1;
}


document.getElementById(`intentar`).addEventListener(`click`, comparacionNumeros);
document.getElementById(`reiniciar`).addEventListener(`click`, reiniciar)












let nombre = 'Juan';