function comprobar(){
	let num;
	let resto;
	num = document.getElementById("num").value;
	resto = num % 2;
	if (resto == 1){
		
		document.getElementById("mensaje").innerHTML = "El numero es impar"
			
	} else {
		
		document.getElementById("mensaje").innerHTML = "El numero es par"
	}	
}	