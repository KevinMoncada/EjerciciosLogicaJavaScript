/* 
Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las bonificaciones de dos trabajadores, e imprima el nombre del que más salario neto tiene. 
Salario neto = Salario total que percibe el individuo           Salario Bruto = Salario antes de todas las bonificaciones o deducciones hechas segun el contrato del trabajador
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
function calculeSalarioNeto(salarioBruto, Bonificaciones, Deducciones) {
    return (salarioBruto + Bonificaciones - Deducciones)
}



//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
//TRABAJADOR 1
const nombreTrabajador1 = prompt(`Ingrese su Nombre`);
const salarioBruto1 = parseFloat(prompt(`Cual es su salario Bruto?`));
const deducciones1 = parseFloat(prompt(`Ingrese el valor de sus Deducciones`))
const bon1 = parseFloat(prompt(`Ingrese el valor de sus Bonificaciones`))

//TRABAJADOR 2
const nombreTrabajador2 = prompt(`Ingrese su Nombre`);
const salarioBruto2 = parseFloat(prompt(`Cual es su salario Bruto?`));
const deducciones2 = parseFloat(prompt(`Ingrese el valor de sus Deducciones`))
const bon2 = parseFloat(prompt(`Ingrese el valor de sus Bonificaciones`))

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
let salarioNetoTrabajador1 = calculeSalarioNeto(salarioBruto1, bon1, deducciones1)
let salarioNetoTrabajador2 = calculeSalarioNeto(salarioBruto2, bon2, deducciones2)



//INFO EN PANTALLA
print('<h2>Datos Trabajadores</h2>');
print('<h4>Trabajador 1</h4>');
print(` Nombre: ${nombreTrabajador1} <br>
        Salario Bruto: ${salarioBruto1}$ <br>
        Deducciones: ${deducciones1}$ <br>
        Bonificaciones: ${bon1}$ <br>
        Salario Neto: ${salarioNetoTrabajador1}$`);
saltarLinea();

print('<h4>Trabajador 2</h4>');
print(` Nombre: ${nombreTrabajador2} <br>
        Salario Bruto: ${salarioBruto2}$ <br>
        Deducciones: ${deducciones2}$ <br>
        Bonificaciones: ${bon2}$ <br>
        Salario Neto: ${salarioNetoTrabajador2}$`);
saltarLinea();

if (salarioNetoTrabajador1 > salarioNetoTrabajador2) {
    print(`<h4>El trabajador que mas dinero gana es: ${nombreTrabajador1} (${salarioNetoTrabajador1}$)</h4>`);
}
if (salarioNetoTrabajador2 > salarioBruto1) {
    print(`<h4>El trabajador que mas dinero gana es: ${nombreTrabajador2} (${salarioNetoTrabajador2}$)</h4>`);
}
if (salarioNetoTrabajador2 == salarioBruto1) {
    print(`<h4>Ambos trabajadores ganan el mismo salario (${salarioNetoTrabajador1}$)</h4>`);
}

