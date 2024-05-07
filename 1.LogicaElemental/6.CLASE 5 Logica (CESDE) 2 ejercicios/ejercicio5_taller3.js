/* 
Crear un algoritmo que le permita al usuario conocer cual es su salario neto luego de ingresar el tipo de contrato que suscribe con la empresa
(FIJO o TEMPORAL).

Si el contrato es FIJO el programa debe leer el nombre, el número de horas trabajadas, el salario básico hora, el total de deducciones y el total de bonificaciones  
y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; estos trabajadores tienen un salario básico hora de $6.000 y no tienen deducciones ni bonificaciones.
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


const userName = prompt(`Cual es su nombre?`);
const basicHourlySalaryTemporaryWorker = 6000;
let typeOfContract = prompt(`${userName}, Que tipo de contrato tienes? (Fijo=1 , Temporal=2)`);

let numberOfHoursWorked;
let basicHourlySalary;
let deductions;
let bonus;
let netSalary;
let grossSalary;


if (typeOfContract == "1") {
    typeOfContract = "Fijo";
    numberOfHoursWorked = parseInt(prompt(`Cuantas Horas laboro este mes?`));
    basicHourlySalary = parseInt(prompt(`Cual es su salario basico hora?`));
    deductions = parseInt(prompt(`Cual es el valor de sus deducciones?`));
    bonus = parseInt(prompt(`Cual es el valor de sus bonificaciones?`));
    grossSalary = (basicHourlySalary * numberOfHoursWorked);
    netSalary = (grossSalary + bonus - deductions);
} else if (typeOfContract == "2") {
    typeOfContract = "Temporal"
    numberOfHoursWorked = parseInt(prompt(`Cuantas Horas laboro este mes?`));
    netSalary = (numberOfHoursWorked * basicHourlySalaryTemporaryWorker);
}

//INFO ON SCREEN
print(`<h2> Calculo Salario Neto según Contrato </h2>`);
print(`Nombre del trabajador: ${userName}`);
print(`Tipo de contrato: ${typeOfContract}`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - - - - -`);
print(`Salario Neto: ${netSalary}$`);