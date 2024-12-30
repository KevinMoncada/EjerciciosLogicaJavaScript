/* 
Escribir un algoritmo para un negocio donde el vendedor pueda ingresar, para una venta, el nombre de un artículo, el valor unitario y la cantidad vendida. Se debe mostrar:
●El nombre del artículo
●El valor bruto de la venta
●El valor del descuento (que es del 10% del valor bruto) SI EL VALOR BRUTO ES MAYOR O IGUAL A $100.000 O DE 5% SI EL VALOR BRUTO ES MENOR DE $100.000
●El valor del IVA (que es el 19% del valor bruto)
●El valor del transporte que es el 5% del  valor bruto
El valor neto para pagar (valor bruto – descuento + IVA + transporte)
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

function calculateGrossValue(articleUnityValue, articleQuantitySold) {
    return (articleUnityValue * articleQuantitySold);
}

function calculateNetValue(grossValue, ivaValue, transportValue, discount) {
    return (grossValue + ivaValue + transportValue - discount);
}
//
const articleNameOrId = prompt(`Ingrese el nombre o Id del Articulo`);
const articleUnityValue = parseFloat(prompt(`Ingrese el valor del Articulo`));
const articleQuantitySold = parseInt(prompt(`Cantidad vendida`));
let grossValue = calculateGrossValue(articleUnityValue, articleQuantitySold);

let ivaValue = (grossValue * (19 / 100));
let transportValue = (grossValue * (5 / 100));


let discount;
let message;
if (grossValue >= 100000) {
    discount = (grossValue * (10 / 100));
    message = "Aplica para el descuento del 10%"
} else {
    discount = (grossValue * (5 / 100));
    message = "Aplica para el descuento del 5%"
}
let netValue = calculateNetValue(grossValue, ivaValue, transportValue, discount);


//INFO ON SCREEN
print(`<h2> Ejercicio Examen 1 CESDE </h2>`);
print(`Nombre o ID del Articulo: ${articleNameOrId}`);
print(`Valor Unitario del Articulo: ${articleUnityValue}$`);
print(`Cantidad Vendida: ${articleQuantitySold}`);
print(`Valor bruto de la venta: ${grossValue}$`);
print(`Valor del descuento aplicado: ${discount}$ (${message})`);
print(`Costo por Transporte: ${transportValue}$`);
print(`Valor del IVA: ${ivaValue}$`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - - - - -`);
print(`Valor Neto de la Venta: ${netValue}$`);
print(`FIN`);


















