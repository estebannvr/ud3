var nombre;
var edad;

function pedirDatos(){
	nombre = prompt("¿Como te llamas?"); 	
	pedirDatos1();
}	

function pedirDatos1(){
	edad = prompt("¿Cuantos años tienes?"); 	
	pedirDatos2();
}	

function pedirDatos2(){
	alert("Hola" + nombre + ",veo que tienes"+ edad +"años."); 
}


