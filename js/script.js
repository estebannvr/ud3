function mostrarMensaje(){
	let num1;
	let num2;
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	document.getElementById("mensaje").innerHTML = "El primer número es:" + num1 + "<br>El segundo numero es: " + num2 + "<br>La suma es: " + (num1+num2) + "<br> La resta es: "  + (num1-num2) + "<br> El producto es: " + (num1*num2) + "<br> La division es : " + (num1/num2) + "<br>El resto es: " + (num1%num2) 
}