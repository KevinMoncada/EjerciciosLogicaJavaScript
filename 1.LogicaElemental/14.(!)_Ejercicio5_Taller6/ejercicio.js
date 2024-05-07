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


//WORK-FLOW FUNCTION'S
function print(text) {
  document.write(text);
  document.write("</br>");
}

function lineBreak() {
  document.write("</br>");
  document.write("</br>");
}
//

function calculateMoneyCollectedDuringTheDay(numberOfPassengers, ticketCost) {
  return (numberOfPassengers * ticketCost);
}


let enterRegistration;
let registryNumber = 0;
let driverName;
let vehiclePlate;
let vehicleType;
let numberOfPassengersTransported;
let ticketCost;
let moneyCollectedByTheWorker;

let totalMoneyCollected = 0;
let colectivosMoreThan100Passengers = 0;
let numberOfPassengersTransportedByMicrobuses = 0;
let microbusCounter = 0;
let averageNumberOfPassengersTransportedByMicrobus = 0;
let moneyCollectedByBuses = 0;
let percentageOfBusetas = 0;
let busetasCounter = 0;


//El cilco muestra información progresivamente pero solo despues de recargar la pagina minimo una vez
do {
  alert('Hello')
  console.log(registryNumber);
  registryNumber += 1;

  driverName = prompt(`Ingrese el Nombre del Conductor`);
  vehiclePlate = prompt(`Ingrese la placa del Vehiculo`);
  vehicleType = parseInt(prompt(`Seleccione el tipo de Vehiculo (1=colectivo, 2=microbús, 3=buseta, 4=bus)`));
  ticketCost = parseFloat(prompt(`Ingrese el valor del pasaje`));
  numberOfPassengersTransported = parseInt(prompt(`Ingrese la cantidad de pasajeros transportados durante la jornada`));
  moneyCollectedByTheWorker = calculateMoneyCollectedDuringTheDay(numberOfPassengersTransported, ticketCost);

  switch (vehicleType) {
    case 1:
      vehicleType = 'Colectivo'
      if (numberOfPassengersTransported > 100) {
        colectivosMoreThan100Passengers += 1;
      }
      break;
    case 2:
      vehicleType = 'Microbús'
      numberOfPassengersTransportedByMicrobuses = (numberOfPassengersTransportedByMicrobuses + numberOfPassengersTransported);
      microbusCounter += 1;
      break;
    case 3:
      vehicleType = 'Buseta'
      busetasCounter += 1;
      break;
    case 4:
      vehicleType = 'Bus'
      moneyCollectedByBuses = (moneyCollectedByBuses + moneyCollectedByTheWorker);
      break;
  }


  //CONSOLE INFO moved inside the loop
  console.log(`
  Registro #${registryNumber}
  Nombre del conductor: ${driverName}
  Placa del Vehiculo: ${vehiclePlate}
  Tipo de Vehiculo que Conduce: ${vehicleType}
  Costo del Pasaje: ${ticketCost}$
  Pasajeros transportados durante la Jornada: ${numberOfPassengersTransported}
  Dinero generado durante la jornada: ${moneyCollectedByTheWorker}$
  `);

  //
  totalMoneyCollected = (totalMoneyCollected + moneyCollectedByTheWorker);
  averageNumberOfPassengersTransportedByMicrobus = (numberOfPassengersTransportedByMicrobuses / microbusCounter);
  percentageOfBusetas = ((busetasCounter * 100) / registryNumber);


  enterRegistration = prompt(`Desea ingresar un nuevo registro? (S o N)`).toLowerCase();
  if (enterRegistration == 'n' || enterRegistration == 'no') {
    break;
  }
} while (enterRegistration == 's' || enterRegistration == 'si');

console.log(`- - - - - - - - - - - - - - - - - - - - - - -`);

console.log(`
Dinero total generado por la compañia durante la jornada: ${totalMoneyCollected}$
Colectivos que transportaron a mas de 100 pasajeros: ${colectivosMoreThan100Passengers}
Promedio de pasajeros transportados por Microbuses: ${averageNumberOfPassengersTransportedByMicrobus}
Dinero recolectado por los Buses: ${moneyCollectedByBuses}$
Porcentaje de Busetas respecto a demas vehiculos: ${percentageOfBusetas}%
`)




