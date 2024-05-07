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
//

function calculateGrossValue(quantity, unitValue) {
    return (quantity * unitValue);
}

function calculateNetValue(grossValue, iva, transport, discount) {
    return (grossValue + iva + transport - discount);
}


const itemName = prompt(`Ingrese el nombre del Articulo`);
const unitValue = parseFloat(prompt(`Ingrese el valor unitario del Articulo`));
const quantitySold = parseInt(prompt(`Cuantas unidades se vendieron?`));
const grossValueOfTheSale = calculateGrossValue(quantitySold, unitValue);
const iva = (grossValueOfTheSale * (19 / 100));
const transportationCost = (grossValueOfTheSale * (5 / 100));
let discountCase;
let discountValue;

if (grossValueOfTheSale >= 100000) {
    discountCase = `Politica 1, descuento del 10%`
    discountValue = (grossValueOfTheSale * (10 / 100))
} else {
    discountCase = `Politica 2, Descuento del 5%`
    discountValue = (grossValueOfTheSale * (5 / 100))
}

const netValueOfTheSale = calculateNetValue(grossValueOfTheSale, iva, transportationCost, discountValue);


//INFO ON SCREEN
print(`<h2> Ventas S.A.S</h2>`);
print(`Nombre o referencia del articulo: ${itemName}`);
print(`Valor unitario del articulo: ${unitValue}$`);
print(`Cantidad a vender: ${quantitySold}`);
print(`Valor Bruto de la venta: ${grossValueOfTheSale}$`);
print(`Costo de transporte: ${transportationCost}$`);
print(`Descuento: La compra aplica para ${discountCase}, el cual es por un valor de ${discountValue}$`);
print(`IVA: ${iva}$`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`);
print(`Valor Neto de la venta: ${netValueOfTheSale}$`);


