/*
En un lavadero de vehículos se relacionan al final del día la cantidad de taxis que se lavaron, la cantidad de buses, la cantidad de particulares y la cantidad de motos.
Se desea un programa que muestre el dinero realizado por cada tipo de vehículo (taxis, buses, particulares y motos) y el total realizado en el lavadero. El precio de lavado de los taxis es
de $3.000, el de los buses a $10.000, de los particulares $5.000 y de las motos a $2.000.
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

//Washing Prices
const taxiWashingCost = 3000;
const busWashingCost = 10000;
const particularWashingCost = 5000;
const bikeWashingCost = 2000;
const numberOfTypesOfVehicles = 4;

let vehicleType;
let moneyGeneratedByTaxiLaundering;
let moneyGeneratedByBusLaundering;
let moneyGeneratedByParticularLaundering;
let moneyGeneratedByBikeLaundering;
let washedBuses;
let washedTaxis;
let washedParticulars;
let washedBikes;
let i = 0;

while (i < numberOfTypesOfVehicles) {
    vehicleType = parseInt(prompt(`Cual es el tipo de vehiculo? 
       (BUS=1
        TAXI=2
        MOTO=3 
        PARTICULAR=4)`));
    washedVehicles = parseInt(prompt(`cuantos se lavaron durante la jornada? `));

    switch (vehicleType) {
        case 2:
            moneyGeneratedByTaxiLaundering = (washedVehicles * taxiWashingCost);
            washedTaxis = washedVehicles;
            break;
        case 1:
            moneyGeneratedByBusLaundering = (washedVehicles * busWashingCost);
            washedBuses = washedVehicles;
            break;
        case 4:
            moneyGeneratedByParticularLaundering = (washedVehicles * particularWashingCost);
            washedParticulars = washedVehicles;
            break;
        case 3:
            moneyGeneratedByBikeLaundering = (washedVehicles * bikeWashingCost);
            washedBikes = washedVehicles;
            break;
    }
    i += 1;
}

let totalVehiclesWashed = (washedBuses + washedBikes + washedParticulars + washedTaxis);
let totalMoneyGenerated = (moneyGeneratedByBikeLaundering + moneyGeneratedByBusLaundering + moneyGeneratedByParticularLaundering + moneyGeneratedByTaxiLaundering);

//INFO ON SCREEN
print(`<h2> Ejercicio 3: Ingresos durante la jornada LAVADERO </h2>`);
print(`Cantidad de Vehiculos lavados durante la Jornada`)
print(`Buses lavados: ${washedBuses}`);
print(`Taxis lavados: ${washedTaxis}`);
print(`Particulares lavados: ${washedParticulars}`);
print(`Motos lavadas: ${washedBikes}`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - -`);
print(`Total de Vehiculos lavados durante la jornada: ${totalVehiclesWashed}`);

lineBreak();

print(`Dinero generado por lavado de Buses ${moneyGeneratedByBusLaundering}$`);
print(`Dinero generado por lavado de Taxis ${moneyGeneratedByTaxiLaundering}$`);
print(`Dinero generado por lavado de Particulares ${moneyGeneratedByParticularLaundering}$`);
print(`Dinero generado por lavado de Motos ${moneyGeneratedByBikeLaundering}$`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - -`);
print(`Total dinero generado durante la Jornada: ${totalMoneyGenerated}$`);


