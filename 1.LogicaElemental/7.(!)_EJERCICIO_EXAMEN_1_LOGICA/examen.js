
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
function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}

//2.FUNCIONES QUE REALIZAN PROCEDIMIENTOS MATEMATICOS (FORMULAS)
function calculeValorBruto(cantidadArticulos, valorUnidad) {
    return (cantidadArticulos * valorUnidad)
}

function calculeIVA(valorBruto) {
    return (valorBruto * (19 / 100));
}

function calculeCostoTransporte(valorBruto) {
    return (valorBruto * (5 / 100));
}

function calculeValorNetoVneta(valorBruto, iva, costoTransporte, descuentoVenta) {
    return (valorBruto + iva + costoTransporte - descuentoVenta)
}

//DECLARACION DE VARIABLES
//1.VARIABLES PROCEDENTES DE DATOS HISTORICOS

//2.VARIABLES PROCEDENTES DE DATOS SUMINISTRADOS POR EL USUARIO
let nombreArticulo = prompt(`Ingrese el Nombre/Referencia del Articulo`);
let valorUnitarioArticulo = parseFloat(prompt(`Ingrese el valor unitario del Articulo`));
let cantidadArticulosVendidos = parseInt(prompt(`Ingrese la Cantidad vendida`));

//3.VARIABLES FRUTO DE CALCULOS MATEMATICOS
let valorBrutoVenta = calculeValorBruto(cantidadArticulosVendidos, valorUnitarioArticulo);
let valorIVA = calculeIVA(valorBrutoVenta);
let costoPorTransporte = calculeCostoTransporte(valorBrutoVenta);


//4.CONDICIONALES
let descuento = null;
let politicaDescuento;
if (valorBrutoVenta >= 100000) {
    descuento = (valorBrutoVenta * (10 / 100));
    politicaDescuento = `El valor de la compra es mayor a 100.000$, Aplica para la Politica del descuento del 10%`;
}
if (valorBrutoVenta < 100000) {
    descuento = (valorBrutoVenta * (5 / 100));
    politicaDescuento = `El valor de la compra es menor a 100.000$, Aplica para la Politica del descuento del 5%`;
}

let valorNetoVenta = calculeValorNetoVneta(valorBrutoVenta, valorIVA, costoPorTransporte, descuento);


//INFO EN PANTALLA
document.write(`<h2> Algoritmo de Ventas </h2>`);
document.write(`<h3> Registro </h3>`);
print(`Articulo Vendido: ${nombreArticulo}`);
print(`Valor Unitario del Articulo: ${valorUnitarioArticulo}$`);
print(`Cantidad vendida: ${cantidadArticulosVendidos} Unidades`);
print(`Valor bruto venta: ${valorBrutoVenta}$`);
print(politicaDescuento + ` (-${descuento}$)`);
print(`Valor IVA: ${valorIVA}$`);
print(`Costo Adicional por transporte: ${costoPorTransporte}$`);
print(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - `);
print(`Valor neto venta: ${valorNetoVenta}$`);



