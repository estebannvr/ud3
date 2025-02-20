function comprobarif(){
	let hora;
	hora = parseInt(document.getElementById("hora").value);
	
	if(hora >= 0 && hora <= 24){
		if(hora >= 7 && hora <= 11){
			document.getElementById("mensaje").innerHTML = "Buenos dias";
		}	
		if(hora >= 12 && hora <= 21){
			document.getElementById("mensaje").innerHTML = "Buenas tardes";
		}	
		if(hora < 7 || hora > 21){
			document.getElementById("mensaje").innerHTML = "Buenas noches";
		} 
	} else {
		document.getElementById("mensaje").innerHTML = "El valor introducido no es valido";
	}	
}	

function comprobarswich(){
	let hora = parseInt(document.getElementById("hora").value);
	switch (hora) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 22:
		case 23:
		case 24:
			document.getElementById("mensaje").innerHTML = "Buenas noches";
		break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			document.getElementById("mensaje").innerHTML = "Buenos dias";
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
			document.getElementById("mensaje").innerHTML = "Buenas tardes";
		break;	
		default:
			document.getElementById("mensaje").innerHTML = "El valor introducido no es valido";
		break;	
	}		
	
	
}	