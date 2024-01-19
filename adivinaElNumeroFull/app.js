function generarNumero() {
    let numeroAleatorio = parseInt((Math.random() * 100) + 1);
    return (numeroAleatorio);
}
generarNumero();
let numeroAleatorioGenerado = generarNumero();
let i = 1;

let mensajeSalida = document.getElementById(`textoDinamico`);
function condicionesIniciales() {
    mensajeSalida.innerHTML = `Ingresa un número entero entre 1 y 100`
}
condicionesIniciales();





function reiniciar() {
    condicionesIniciales();
    numeroAleatorioGenerado = generarNumero();
    document.getElementById(`intentar`).removeAttribute(`disabled`);
    mensajeSalida.innerHTML = `Ingresa un número entero entre 1 y 100`
    i = 1;
}



function comparacionNumeros() {
    let numeroIngresadoUsuario = document.getElementById(`numeroIngresado`).value;
    console.log(numeroIngresadoUsuario);
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


document.getElementById(`intentar`).addEventListener(`click`, comparacionNumeros);
document.getElementById(`reiniciar`).addEventListener(`click`, reiniciar)