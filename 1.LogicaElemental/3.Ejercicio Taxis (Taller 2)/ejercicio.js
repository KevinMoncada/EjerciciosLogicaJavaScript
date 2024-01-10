/* 
En un lavadero de vehículos se relacionan al final del día la cantidad de taxis que se lavaron, la cantidad de buses, la cantidad de particulares y la cantidad de motos. 
Se desea un programa que muestre el dinero realizado por cada tipo de vehículo (taxis, buses, particulares y motos) y el total realizado en el lavadero. El precio de lavado de los taxis es 
de $3.000, el de los buses a $10.000, de los particulares $5.000 y de las motos a $2.000.
 */

//DECLARACION DE FUNCIONES
//1.WORK-FLOW FUNCTION'S
function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}

//2.FUNCIONES QUE REALIZAN PROCEDIMIENTOS MATEMATICOS (FORMULAS)
function calculeDineroGeneradoPorLavadoVehiculo(cantidadvehiculoslavados, costolavado) {
    return (cantidadvehiculoslavados * costolavado);
}



//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
let costoLavadoTaxis = 3000;
let costoLavadoBuses = 10000;
let costoLavadoParticulares = 5000;
let costoLavadoMotos = 2000;

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
//CANTIDAD DE VEHICULOS LAVADOS (DE CADA TIPO)
let cantidadTaxisLavados = parseInt(prompt(`Ingrese la cantidad de TAXIS lavados en la jornada`));
let cantidadBusesLavados = parseInt(prompt(`Ingrese la cantidad de BUSES lavados en la jornada`));
let cantidadParticularesLavados = parseInt(prompt(`Ingrese la cantidad de PARTICULARES lavados en la jornada`));
let cantidadMotosLavados = parseInt(prompt(`Ingrese la cantidad de MOTOS lavadas en la jornada`));

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
let dineroGeneradoLavadoTaxis = calculeDineroGeneradoPorLavadoVehiculo(cantidadTaxisLavados, costoLavadoTaxis);
let dineroGeneradoLavadoBuses = calculeDineroGeneradoPorLavadoVehiculo(cantidadBusesLavados, costoLavadoBuses);
let dineroGeneradoLavadoParticulares = calculeDineroGeneradoPorLavadoVehiculo(cantidadParticularesLavados, costoLavadoParticulares);
let dineroGeneradoLavadoMotos = calculeDineroGeneradoPorLavadoVehiculo(cantidadMotosLavados, costoLavadoMotos);
let dineroTotalRecolectado = (dineroGeneradoLavadoTaxis + dineroGeneradoLavadoBuses + dineroGeneradoLavadoParticulares + dineroGeneradoLavadoMotos);

//LOOPS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//INFO EN PANTALLA
document.write("<h2> LAVADERO S.A.S </h2>");
document.write("<h3> Cantidad de Vehiculos Lavados </h3>");
print(`
Taxis: ${cantidadTaxisLavados} <br>
Buses: ${cantidadBusesLavados} <br>
Particulares: ${cantidadParticularesLavados} <br>
Motos: ${cantidadMotosLavados} <br>
`)

saltarLinea();

document.write("<h3> Ingresos por Lavado (Por cada tipo de vehiculo) </h3>");
print(`
Ingresos por lavado de Taxis: ${dineroGeneradoLavadoTaxis} <br>
Ingresos por lavado de Buses: ${dineroGeneradoLavadoBuses} <br>
Ingresos por lavado de Particulares: ${dineroGeneradoLavadoParticulares} <br>
Ingresos por lavado de Motos: ${dineroGeneradoLavadoMotos} <br>
`)

saltarLinea();

document.write(`<h3> Total de dinero generado durante la jornada: ${dineroTotalRecolectado} </h3>`);

