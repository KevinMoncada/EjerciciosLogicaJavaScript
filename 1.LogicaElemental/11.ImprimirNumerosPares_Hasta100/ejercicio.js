/* 
CREAR UN ALGORITMO QUE IMPRIMA TODOS LOS NUMEROS PARES DEL 0 AL 100 Y AL FINAL MUESTRE LA PALABRA FIN
 */


/* DECLARACION DE FUNCIONES */
//1.WORK-FLOW
function print(textoenpantalla) {
    document.write(textoenpantalla);
    document.write("<br>");
}

function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

//LOOP
//USANDO WHILE
var numerosPares = 0; //VARIABLE DE CONTROL
while (numerosPares <= 100) {
    print(numerosPares);
    //ACTUALIZADOR
    numerosPares += 2;
}
print("FIN")
saltarLinea();

//USANDO FOR
for (numerosPares = 0; numerosPares <= 100; numerosPares += 2) {
    print(numerosPares);
}
print("FIN")