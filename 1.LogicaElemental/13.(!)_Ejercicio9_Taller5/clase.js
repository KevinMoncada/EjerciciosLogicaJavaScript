/* 
Una flota de transporte presta sus servicios con diferentes tipos de vehiculos, al final de la jornada los vehiculos llegan al parqueadero y se elabora por cada vehículo un registro con la placa, el tipo de vehiculo (1= bus, 2= buseta, 3= colectivo), el número de pasajeros transportados, el dinero recolectado, y el pago que corresponde al conductor (20 % del total recolectado)
Costo de los pasajes:
- Bus: $2200
- Buseta: $ 2500
- Colectivos: $3500 
Elabore un algoritmo que permita realizar un registro para cada vehiculo ingresado al final de la jornada, dicho registro debe mostrar todos los datos anteriormente mencionados
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

function calculateDriverPayment(totalCollected) {
    return (totalCollected * (20 / 100));
}

let enterRegistration;
let registryNumber = 0;
let driverName;
let vehiclePlate;
let vehicleType;
let numberOfPassengersTransported;
let driverPay;
let moneyCollectedDuringTheDay;
let ticketCost;
let busTicketCost = 2200;
let busetaTicketCost = 2500;
let colectivoTicketCost = 3500;


do {
    registryNumber += 1;
    console.log(registryNumber); //Sin este console.log no se pueden ver los registros de forma progresiva

    driverName = prompt(`Ingrese el Nombre del Conductor`);
    vehiclePlate = prompt(`Ingrese la placa del Vehiculo`);
    vehicleType = parseInt(prompt(`Seleccione el tipo de Vehiculo (1:Bus, 2:Buseta, 3:Colectivo)`));

    switch (vehicleType) {
        case 1:
            vehicleType = 'Bus'
            ticketCost = busTicketCost;
            break;
        case 2:
            vehicleType = 'Buseta'
            ticketCost = busetaTicketCost;
            break;
        case 3:
            vehicleType = 'Colectivo'
            ticketCost = colectivoTicketCost;
            break;
    }

    numberOfPassengersTransported = parseInt(prompt(`Ingrese la cantidad de pasajeros transportados durante la jornada`));
    moneyCollectedDuringTheDay = calculateMoneyCollectedDuringTheDay(numberOfPassengersTransported, ticketCost);
    driverPay = calculateDriverPayment(moneyCollectedDuringTheDay);

    //CONSOLE INFO moved inside the loop
    console.log(`
    Registro #${registryNumber}
    Nombre del conductor: ${driverName}
    Placa del Vehiculo: ${vehiclePlate}
    Tipo de Vehiculo que Conduce: ${vehicleType}
    Costo del Pasaje: ${ticketCost}$
    Pasajeros transportados durante la Jornada: ${numberOfPassengersTransported}
    Dinero generado durante la jornada: ${moneyCollectedDuringTheDay}$
    Pago correspondiente al conductor: ${driverPay}$
    `);

    enterRegistration = prompt(`Desea ingresar un nuevo registro? (S o N)`).toLowerCase();
    if (enterRegistration == 'n' || enterRegistration == 'no') {
        break;
    }
} while (enterRegistration == 's' || enterRegistration == 'si');


