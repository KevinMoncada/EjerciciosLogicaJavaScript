/* 
Elabore un algoritmo que lea el nombre, el salario bruto, las deducciones y las bonificaciones de dos trabajadores, e imprima el nombre del que más salario neto tiene. 
Salario neto = Salario total que percibe el individuo           Salario Bruto = Salario antes de todas las bonificaciones o deducciones hechas segun el contrato del trabajador
*/

//DECLARACION DE FUNCIONES
//1.WORK-FLOW FUNCTION'S
function print(text) {
    document.write(text);
    document.write("<br>");
}

function lineBreak() {
    document.write("<br>");
    document.write("<br>");
}

function CalculateNetSalary(grossSalary, bon, deductions) {
    return (grossSalary + bon + - deductions);
}
//

const workerOneName = prompt(`Nombre del trabajador`);
const workerOneGrossSalary = parseFloat(prompt(`Salario Bruto establecido en el contrato`));
const workerOneBonus = parseFloat(prompt(`Valor de las bonificaciones`));
const workerOneDeductions = parseFloat(prompt(`Valor de las deducciones`));
let workerOneNetSalary = CalculateNetSalary(workerOneGrossSalary, workerOneBonus, workerOneDeductions);

const workerTwoName = prompt(`Nombre del trabajador`);
const workerTwoGrossSalary = parseFloat(prompt(`Salario Bruto establecido en el contrato`));
const workerTwoBonus = parseFloat(prompt(`Valor de las bonificaciones`));
const workerTwoDeductions = parseFloat(prompt(`Valor de las deducciones`));
let workerTwoNetSalary = CalculateNetSalary(workerTwoGrossSalary, workerTwoBonus, workerTwoDeductions);

//HighestNetSalary
let highestNetSalary;
let highestPaidWorker;
if (workerOneNetSalary > workerTwoNetSalary) {
    highestNetSalary = workerOneNetSalary;
    highestPaidWorker = workerOneName;
} else {
    highestNetSalary = workerTwoNetSalary;
    highestPaidWorker = workerTwoName;
}



//INFO ON SCREEN
print(`<h2>Salario mas Alto</h2>`);
print(`<strong>Datos Trabajador 1:</strong>`);
print(`Nombre: ${workerOneName}`);
print(`Salario Bruto: ${workerOneGrossSalary}$`);
print(`Bonificaciones: ${workerOneBonus}$`);
print(`Deducciones: ${workerOneDeductions}$`);
print(`Salario Neto: ${workerOneNetSalary}$`);
lineBreak();
print(`<strong>Datos Trabajador 2:</strong>`);
print(`Nombre: ${workerTwoName}`);
print(`Salario Bruto: ${workerTwoGrossSalary}$`);
print(`Bonificaciones: ${workerTwoBonus}$`);
print(`Deducciones: ${workerTwoDeductions}$`);
print(`Salario Neto: ${workerTwoNetSalary}$`);
lineBreak();
print(`<strong>Salario neto mas alto: ${highestNetSalary}$, el cual corresponde a ${highestPaidWorker}</strong>`);
