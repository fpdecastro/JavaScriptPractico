//Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;

function pCuadrado(lado) {
    return lado * 4;
}
function aCuadrado(lado) {
    return lado * lado;
}

console.log("El lado del cuadrado es: " + ladoCuadrado + "cm");
console.log("El perimitro del cuadrado es: " + pCuadrado(ladoCuadrado) + "cm");
console.log("El area del cuadrado es: " + aCuadrado(ladoCuadrado) + "cm^2");

console.groupEnd();


console.group("Triangulo");

//Código del triangulo
const ladouno = 6;
const ladodos = 6;
const baseTriangulo = 4;

function perimetroTriangulo(l1, l2, b){
    return l1 + l2 + b; 
}

function height(l1, b){
    return l1 * Math.sin(Math.acos((b/2)/l1));
}

function areaTriangule( lado, b){
    return Math.round(height( lado, b) * b / 2)
}

console.log("Los lados miden " + ladouno + ", " + ladodos +", "+ baseTriangulo + " cm");
console.log("El perimitro del triangulo es: " + perimetroTriangulo(ladouno, ladouno, baseTriangulo) + " cm");
console.log("El area del triangulo es: " + areaTriangule(ladouno, baseTriangulo) + " cm^2");

console.groupEnd();

//Codigo del círculo
console.group("Circulo");

var radio = 4;
var diametro = radio * 2;
const pi = Math.PI

function circunsferencia(r){
    return Math.round(2 * Math.PI * r);
}
    
function areaCirculo(r){
    return Math.round(r * r * Math.PI);
}

console.log("El perimitro del circulo es: " + Math.round(circunsferencia(radio)) + " cm");
console.log("El area del circulo es: " + Math.round(areaCirculo(radio)) + " cm^2");

console.groupEnd();



// Funciones on-click interactuando con el html

function perimetro_Cuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimeterSquare = pCuadrado(value);
    alert(perimeterSquare);
}

function area_Cuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const areaSquare = aCuadrado(value);
    alert(areaSquare);
}

function perimetro_Triangulo(){
    const valueSideUno = document.getElementById("InputLadoUnoTriangulo").value;
    const valueSideDos = document.getElementById("InputLadoDosTriangulo").value;
    const valueBase = document.getElementById("baseDelTriangulo").value;
    const perimeterTriangule = perimetroTriangulo(valueSideUno, valueSideDos, valueBase);
    console.log(valueSideDos, valueSideUno, valueBase);
    alert(perimeterTriangule);

}

function area_Triangulo(){
    const valueSideDos = document.getElementById("InputLadoDosTriangulo").value;
    const valueBase = document.getElementById("baseDelTriangulo").value;
    const areaTriangule = areaTriangule(valueSideDos, valueBase);
    alert(areaTriangule);
}

function perimeter_Circle(){
    const valueradioCircle = document.getElementById("InputRadioCirculo").value;
    const perimeterCircle = circunsferencia(valueradioCircle);
    alert(perimeterCircle);
}

function area_Circle(){
    const valueradioCircle = document.getElementById("InputRadioCirculo").value;
    const areaCircle = areaCirculo(valueradioCircle);
    alert(areaCircle);
}