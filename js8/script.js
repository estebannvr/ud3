function comprobarif(){
	let hora;
	hora =  document.getElementById("hora").value;
	
	if(hora >= 0 && hora <= 24){
		if(hora >= 7 && hora <= 11){
			document.getElementById("mensaje").innerHTML = "Buenos dias";
		}	
		if(hora >= 12 && hora <= 21){
			document.getElementById("mensaje").innerHTML = "Buenas tardes";
		}	
		if(hora < 7 && hora > 11){
			document.getElementById("mensaje").innerHTML = "Buenas noches";
		}	
	} else {
		document.getElementById("mensaje").innerHTML = "El valor introducido no es valido";
	}	
}	

function comprobarif(){
	let hora;
	hora =  document.getElementById("hora").value;
	
}	