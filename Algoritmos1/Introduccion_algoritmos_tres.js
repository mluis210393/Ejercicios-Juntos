let number1 = parseInt(prompt("Ingrese valor de primer articulo"));
let number2 = parseInt(prompt("Ingrese valor de segundo articulo"));
let number3 = parseInt(prompt("Ingrese valor de tercer articulo"));




if(number1>number2 && number1>number3){
  
    alert("Los articulos que puede adquirir son el dos con un precio de: "+ number2 + " dolares y el tres con un precio de: "+ number3 +" dolares");
    
}else if(number2>number1 && number2>number3){

    alert("Los articulos que puede adquirir son el uno con un precio de: "+ number1 + " dolares y el tres con un precio de: "+ number3 + " dolares");

}else if(number3>number1 && number3>number2){

    alert("Los articulos que puede adquirir son el uno con un precio de: "+ number1 + " dolares y el dos con un precio de: "+ number2 +" dolares");

}

/*el programa realiza una comparacion de los precios de articulos ingresados muestra en pantalla mensaje de sugerencia para adquirir los dos productos mas baratos*/