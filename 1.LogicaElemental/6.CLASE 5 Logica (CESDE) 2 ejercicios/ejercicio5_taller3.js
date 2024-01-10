/* 
Crear un algoritmo que le permita al usuario conocer cual es su salario neto luego de ingresar el tipo de contrato que suscribe con la empresa
(FIJO o TEMPORAL).

Si el contrato es FIJO el programa debe leer el nombre, el número de horas trabajadas, el salario básico hora, el total de deducciones y el total de bonificaciones  
y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; estos trabajadores tienen un salario básico hora de $6.000 y no tienen deducciones ni bonificaciones.
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
function calculeSalarioNeto(salariobasicohora, numhorastrabajadas, deducciones, bonos) {
    return ((salariobasicohora * numhorastrabajadas) + deducciones - bonos)
}


//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
let salarioBasicoHoraTemporal = 6000;

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
let tipoDeContrato = prompt(`Que tipo de contrato suscribe usted actualmente con la empresa? (Fijo o Temporal)`);

let nombreTrabajador;
let numeroHorasTrabajadas;
let salarioBasicoHora;
let bonificacionesFijo;
let deduccionesFijo;
let salarioBrutoFijo;
let salarioNetoFijo;


if (tipoDeContrato == `fijo` || tipoDeContrato == `Fijo` || tipoDeContrato == `FIJO` || tipoDeContrato == `FIJO`) {
    nombreTrabajador = prompt(`Ingrese su nombre`);
    numeroHorasTrabajadas = parseFloat(prompt(`Ingrese la cantidad de horas laboradas en el mes`));
    salarioBasicoHora = parseFloat(prompt(`Ingrese su salario basico/hora estipulado en el contrato`));
    bonificacionesFijo = parseFloat(prompt(`Ingrese el valor de sus Bonificaciones`));
    deduccionesFijo = parseFloat(prompt(`Ingrese el valor de sus Deducciones`));
    salarioBrutoFijo = (salarioBasicoHora * numeroHorasTrabajadas);
    salarioNetoFijo = calculeSalarioNeto(salarioBasicoHora, numeroHorasTrabajadas, deduccionesFijo, bonificacionesFijo)

    document.write(`<h2>Calculo Salario Neto Segun Contrato</h2>`);
    print(`Trabajador con Contrato: FIJO`);
    print(
        `
    Nombre trabajador: ${nombreTrabajador} <br>
    Numero de horas trabajadas al mes: ${numeroHorasTrabajadas} <br>
    Salario basico Hora: ${salarioBasicoHora} <br>
    Bonificaciones: ${bonificacionesFijo} <br>
    Deducciones: ${deduccionesFijo} <br>
    Salario Bruto: ${salarioBrutoFijo} <br>
    Salario neto: ${salarioNetoFijo} <br>
    `
    )
} else {
    nombreTrabajador = prompt(`Ingrese su nombre`);
    numeroHorasTrabajadas = parseFloat(prompt(`Ingrese la cantidad de horas laboradas en el mes`));
    salarioNetoTemporal = (salarioBasicoHoraTemporal * numeroHorasTrabajadas);

    document.write(`<h2>Calculo Salario Neto Segun Contrato</h2>`);
    print(`Trabajador con Contrato: TEMPORAL`);
    print(
        `
    Nombre trabajador: ${nombreTrabajador} <br>
    Numero de horas trabajadas al mes: ${numeroHorasTrabajadas} <br>
    Salario basico Hora: ${salarioBasicoHoraTemporal} <br>
    Salario neto: ${salarioNetoTemporal} <br>
    `
    )
}


