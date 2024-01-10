/* 
Una empresa transportadora desea sistematizar la liquidación diaria de sus N vehículos, para ello, crea el siguiente registro por cada uno de ellos: 
REGISTRO
1. Placa 
2. Propietario 
3. Tipo de vehículo (1=colectivo, 2=microbús, 3=buseta, 4=bus) 
4. Número de pasajeros transportados 
5. Valor de cada pasaje. 

El administrador desea saber: 
1. Total recolectado por la empresa. 
2. Cuantos de los colectivos transportaron más de 100 pasajeros. 
3. Promedio de pasajeros transportados por los microbuses. 
4. Cuánto dinero recolectaron en total los buses. 
5. Porcentaje que representan las busetas respecto a todo el parque automotor de la empresa  
*/


//FUNCIONES
function print(textoenpantalla) {
  document.write(textoenpantalla);
  document.write("<br>");
}

function saltarLinea() {
  document.write("<br>");
  document.write("<br>");
}

document.write(`<h2>Ejercicio Registro Flota de Vehiculos Avanzado</h2>`);

const pasajeColectivo = 3500;
const pasajeMicrobus = 2100;
const pasajeBuseta = 2500;
const pasajeBus = 2200;
let continuar;
let i = 0;
let nombreConductor;
let placa;
let tipoVehiculo;
let numeroPasajerosTransportados;
let dineroRecolectado;
let pagoConductor;
//
let dineroTotalJornada = 0;
let colectivosMasCienPasajeros = 0;
let pasajerosTransportadosMicrobuses = 0;
let promPasajerosTransportadosMicrobuses;
let registrosMicrobus = 0;
let dineroRecolectadoBus = 0;
let registrosBusetas = 0;
do {
  i += 1;
  print(`<strong>Registro#${i}</strong>`);
  nombreConductor = prompt(`Buenas Tardes, Cual es su nombre?`);
  print(`Nombre Conductor:: ${nombreConductor}`);
  placa = prompt(`Cual es la Placa de su Vehiculo?`);
  print(`Placa Vehiculo: ${placa}`);
  tipoVehiculo = prompt(`Que tipo de Vehiculo conduce? (1=colectivo, 2=microbús, 3=buseta, 4=bus)`);
  numeroPasajerosTransportados = parseInt(prompt(`Cuantos pasajeros transporto el dia de Hoy?`));
  print(`Cantidad de Pasajeros transportados durante la Jornada: ${numeroPasajerosTransportados}`);
  switch (tipoVehiculo) {
    case "1":
      dineroRecolectado = (numeroPasajerosTransportados * pasajeColectivo);
      if (numeroPasajerosTransportados > 100) {
        colectivosMasCienPasajeros += 1;
      }
      print(`Tipo de Vehiculo: Colectivo`);
      print(`Valor pasaje: ${pasajeColectivo}$`);
      break;
    case "2":
      dineroRecolectado = (numeroPasajerosTransportados * pasajeMicrobus);
      registrosMicrobus += 1;
      pasajerosTransportadosMicrobuses = (pasajerosTransportadosMicrobuses + numeroPasajerosTransportados);
      promPasajerosTransportadosMicrobuses = (pasajerosTransportadosMicrobuses / registrosMicrobus);
      print(`Tipo de Vehiculo: Microbús`);
      print(`Valor pasaje: ${pasajeMicrobus}$`);

      break;
    case "3":
      registrosBusetas += 1;
      dineroRecolectado = (numeroPasajerosTransportados * pasajeBuseta);
      print(`Tipo de Vehiculo: Buseta`);
      print(`Valor pasaje: ${pasajeBuseta}$`);
      break;
    case "4":
      dineroRecolectado = (numeroPasajerosTransportados * pasajeBus);
      dineroRecolectadoBus = (dineroRecolectadoBus + dineroRecolectado);
      print(`Tipo de Vehiculo: Bus`);
      print(`Valor pasaje: ${pasajeBus}$`);
      break;
  }
  print(`Dinero recolectado por el conductor: ${dineroRecolectado}$`)
  pagoConductor = (dineroRecolectado * (20 / 100));
  print(`Pago correspondiente al Conductor: ${pagoConductor}$`);


  dineroTotalJornada = (dineroTotalJornada + dineroRecolectado);
  porcentajeBusetasRespectoAFlota = ((100 * registrosBusetas) / i);

  continuar = prompt(`Desea Ingresar un nuevo registro?`)
  if (continuar == "No" || continuar == "N" || continuar == "NO" || continuar == "no") {
    break;
  }
  saltarLinea();
} while (continuar == "Si" || continuar == "S" || continuar == "si" || continuar == "SI");

print(`<hr>`)
print(`El dinero total recolectado durante la joranda fue: ${dineroTotalJornada}$`);
print(`Los colectivos que transportaron a mas de 100 pasajeros fueron: ${colectivosMasCienPasajeros}`);
print(`El promedio de pasajeros transportados por los Microbuses es de: ${promPasajerosTransportadosMicrobuses}`);
print(`El dinero total recolectado por los buses fue: ${dineroRecolectadoBus}$`);
print(`El porcentaje de busetas respecto a la flota es de: ${porcentajeBusetasRespectoAFlota}%`);