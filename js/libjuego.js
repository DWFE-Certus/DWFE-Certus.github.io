/*PASO 6*/
//$ ADECUACIÓN FUNCION NO NATIVA $
String.prototype.replaceAt=function(index, character) { 
    return this.substring(0, index) + 
    character + 
    this.substring(index+character.length);
 } 
 /* FUNCION "replaceat" que hace??: SUSTITUYE EN UNA POSICIÓN, SUSTITUYE EN UN CARACTER */

/*PASO 2*/
const posibilidades = ['perro','gato','casa','elefante'];/*2.1 SE CREA EL ARREGLO PARA VER LA POSIBILIDAD DE 4 PALABRAS*/
const clave = posibilidades[Math.floor(Math.random()*posibilidades.length)];/*2.2 LUEGO ESCOGE UNA "POSIBILIDAD" COMO LA CALCULA?? 
ASI COGEMOS EL ARREGLO POSIBILIDADES .LENGTH CUENTA LOS COMPONENTES DEL ARRELGO - .RANDOM ESCOJE UN VALOR ENTES 0 Y 1 
(INCLUIDAS TODAS LAS DECIMALES) Y CON .FLOOR REDONDEO A ENTERO EL CALCULO DEL PRODUCTO ENTRE .RANDOM Y .LENGTH   */ 

//alert(clave); /*PRUEBA N°2: PAGINA RESPONDE CON PALABRAS ALEATORIAS*/

/*PASO 3*/
let claveEncriptada = clave.replace(/./g, "_ ");
//$ ADECUACIÓN FUNCION NO NATIVA $
/*3.1 CREAMOS UNA NUEVA VARIABLE CLAVEENCR. AL CUAL SE LE VA ASIGNAR EL MISMO VALOR DE SU DATO STRING
SUSTITUIDAS POR CADA CARACTER UN SUBGUION MAS UN ESPACIO*/

 //alert(clave + "  |  " + claveEncriptada); /*PRUEBA N°3: SE HACE LA PRUEBA Y MOSTRAMOS LA PALABRA CON SU RESPECTIVO "ENCRIPTAMIENTO"*/


let cuentaFallo = 0;


/*PASO 1*/
 //sE ACTUALIZA EN EL PASO 5//document.querySelector("#procesar").addEventListener("click", ()=>{alert(1)});
 /*PRUEBA N°1: BOTON RESPONDE AL EVENTO CLICK*/
document.querySelector("#indicio").innerHTML = claveEncriptada;

/*PASO 5*/
document.querySelector("#procesar").addEventListener("click", ()=>
{ // se actualiza el funcionamiento del boton Evaluar letra.
    const letra = document.querySelector("#letra").value; // comienza a jalar el valor de ese objeto del DOM y se muestra en el alert

    //alert (clave);

    let fallo = true;
        
    for(const i in clave){
        if (letra == clave[i]) {
            //alert ("exito");
            claveEncriptada = claveEncriptada.replaceAt(i*2,letra);
            fallo = false;
        }
    }

    if (fallo) {
        cuentaFallo ++;
        document.querySelector("#imgAhorcado").style.
        backgroundPosition = -(204*cuentaFallo) + 'px 0';
        if (cuentaFallo == 4) {
            alert("Perdiste el juego... Estas Ahorcado");
        }
    }else{
        if (claveEncriptada.indexOf('_') < 0) {
            alert("Victoria");
        }
    }
    //alert (claveEncriptada);

    document.querySelector("#indicio").innerHTML = claveEncriptada;

    document.querySelector("#letra").value = '';
    document.querySelector("#letra").focus();
    
});