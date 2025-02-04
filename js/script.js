let a;
let b;

function calcular(){
	a = parseInt(prompt("Introduce el primer numero:"));
	calcular1();
}	

function calcular1(){
	b = parseInt(prompt("Introduce el segundo numero:"));
	calcular2();
}	

function calcular2(){
	alert("El primer numero es: " + a + "\n El segundo número es: " + b +"\n La suma es: " + (a+b) + "\n La resta es: " + (a-b) + "\n El producto es: " + (a*b) + "\n La division es: " + (a/b) + "\n El resto es: " + (a%b));
	
}