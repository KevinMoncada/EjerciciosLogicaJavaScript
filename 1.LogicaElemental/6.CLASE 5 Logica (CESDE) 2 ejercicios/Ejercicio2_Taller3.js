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
//

function calculateNetSalary(grossSalary, bonus, deductions) {
    return (grossSalary + bonus - deductions)
}

let higherSalary;
let higherSalaryWorkerName;

//Recolecta de datos trabajadores
const firstWorkerName = prompt(`Ingrese su nombre`);
const firstWorkerGrossSalary = parseFloat(prompt(`${firstWorkerName} Ingrese el valor de su salario Bruto`));
const firstWorkerBonus = parseFloat(prompt(`Ingrese el valor de sus Bonificaciones`));
const firstWorkerDeductions = parseFloat(prompt(`Ingrese el valor de sus Deducciones`));

const secondWorkerName = prompt(`Ingrese su nombre`);
const secondWorkerGrossSalary = parseFloat(prompt(`${secondWorkerName} Ingrese el valor de su salario Bruto`));
const secondWorkerBonus = parseFloat(prompt(`Ingrese el valor de sus Bonificaciones`));
const secondWorkerDeductions = parseFloat(prompt(`Ingrese el valor de sus Deducciones`));

//Calculos
const firstWorkerNetSalary = calculateNetSalary(firstWorkerGrossSalary, firstWorkerBonus, firstWorkerDeductions);
const secondWorkerNetSalary = calculateNetSalary(secondWorkerGrossSalary, secondWorkerBonus, secondWorkerDeductions);

if (firstWorkerNetSalary > secondWorkerNetSalary) {
    higherSalary = firstWorkerNetSalary;
    higherSalaryWorkerName = firstWorkerName;
} else {
    higherSalary = secondWorkerNetSalary;
    higherSalaryWorkerName = secondWorkerName;
}

//Info on Screen
print(`<h2>Comparación de salarios</h2>`);
print(`<strong>Trabajador 1</strong>`);
print(`Nombre: ${firstWorkerName}`);
print(`Salario Bruto: ${firstWorkerGrossSalary}$`);
print(`Bonificaciones: ${firstWorkerBonus}$`);
print(`Deducciones: ${firstWorkerDeductions}$`);
print(`<strong>Salario Neto: ${firstWorkerNetSalary}$ </strong>`);

lineBreak();

print(`<strong>Trabajador 2</strong>`);
print(`Nombre: ${secondWorkerName}`);
print(`Salario Bruto: ${secondWorkerGrossSalary}$`);
print(`Bonificaciones: ${secondWorkerBonus}$`);
print(`Deducciones: ${secondWorkerDeductions}$`);
print(`<strong>Salario Neto: ${secondWorkerNetSalary}$ </strong>`);

lineBreak();
print(`<strong> Salario Neto mas Alto: ${higherSalary}$ </strong> Correspondiente a <strong>${higherSalaryWorkerName}</strong>`);

