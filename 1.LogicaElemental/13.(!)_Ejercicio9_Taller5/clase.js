/* 
Una flota de transporte presta sus servicios con diferentes tipos de vehiculos, al final de la jornada los vehiculos llegan al parqueadero y se elabora por cada vehículo un registro con la placa, el tipo de vehiculo (1= bus, 2= buseta, 3= colectivo), el número de pasajeros transportados, el dinero recolectado, y el pago que corresponde al conductor (20 % del total recolectado)
Costo de los pasajes:
- Bus: $2200
- Buseta: $ 2500
- Colectivos: $3500 
Elabore un algoritmo que permita realizar un registro para cada vehiculo ingresado al final de la jornada, dicho registro debe mostrar todos los datos anteriormente mencionados
*/


//DECLARACION DE FUNCIONES
function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}

function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

document.write(`<h2>Ejercicio Registro Flota de Vehiculos Basico</h2>`);

const pasajeBus = 2200;
const pasajeBuseta = 2500;
const pasajeColectivo = 3500;
let continuar;
let i = 1;
let nombreConductor;
let placa;
let tipoVehiculo;
let numeroPasajerosTransportados;
let dineroRecolectado;
let pagoConductor;
do {
    print(`<strong>Registro#${i}</strong>`);
    nombreConductor = prompt(`Buenas Tardes, Cual es su nombre?`);
    print(`Nombre Conductor:: ${nombreConductor}`);
    placa = prompt(`Cual es la Placa de su Vehiculo?`);
    print(`Placa Vehiculo: ${placa}`);
    tipoVehiculo = prompt(`Que tipo de Vehiculo conduce? (1= bus, 2= buseta, 3= colectivo)`);
    numeroPasajerosTransportados = parseInt(prompt(`Cuantos pasajeros transporto el dia de Hoy?`));
    print(`Cantidad de Pasajeros transportados durante la Jornada: ${numeroPasajerosTransportados}`);
    switch (tipoVehiculo) {
        case "1":
            dineroRecolectado = (numeroPasajerosTransportados * pasajeBus);
            print(`Tipo de Vehiculo: Bus`);
            break;
        case "2":
            dineroRecolectado = (numeroPasajerosTransportados * pasajeBuseta);
            print(`Tipo de Vehiculo: Buseta`);
            break;
        case "3":
            dineroRecolectado = (numeroPasajerosTransportados * pasajeColectivo);
            print(`Tipo de Vehiculo: Colectivo`);
            break;
    }
    print(`Dinero recolectado durante la jornada: ${dineroRecolectado}$`)
    pagoConductor = (dineroRecolectado * (20 / 100));
    print(`Pago correspondiente al Conductor: ${pagoConductor}$`)

    i += 1;
    saltarLinea();
    continuar = prompt(`Desea Ingresar un nuevo registro?`)
    if (continuar == "No" || continuar == "N" || continuar == "NO" || continuar == "no") {
        break;
    }
} while (continuar == "Si" || continuar == "S" || continuar == "si" || continuar == "SI");
