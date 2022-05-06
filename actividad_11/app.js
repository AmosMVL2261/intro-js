//inicializamos las variables
let temporal1 = ""; //Primer número de la operacion
let temporal2 = ""; //Segundo número de la operación
let flagOperation = 0;
let operation = "";

//traer el elemento
let result = document.querySelector("#resultado");
const button0 = document.querySelector("#zero");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const buttonDot = document.querySelector("#dot");
const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");
const buttonEqual = document.querySelector("#equal");
const buttonAC = document.querySelector("#ac"); //Reinicia todo
const buttonCE = document.querySelector("#ce"); //Solo borra la pantalla pero no la operacion


//Evento click
button0.addEventListener('click', () => {zero();});
button1.addEventListener('click', () => {one();});
button2.addEventListener('click', () => {two();});
button3.addEventListener('click', () => {three();});
button4.addEventListener('click', () => {four();});
button5.addEventListener('click', () => {five();});
button6.addEventListener('click', () => {six();});
button7.addEventListener('click', () => {seven();});
button8.addEventListener('click', () => {eight();});
button9.addEventListener('click', () => {nine();});
buttonDot.addEventListener('click', () => {dot();});
buttonPlus.addEventListener('click', () => {operationSelected("plus");});
buttonMinus.addEventListener('click', () => {operationSelected("minus");});
buttonMultiply.addEventListener('click', () => {operationSelected("multiply");});
buttonDivide.addEventListener('click', () => {operationSelected("divide");});
buttonEqual.addEventListener('click', () => {equal();});
buttonAC.addEventListener('click', () => {ac();});
buttonCE.addEventListener('click', () => {ce();});

function zero(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"0";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"0";
        result.textContent=temporal2;
    }
}

function one(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"1";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"1";
        result.textContent=temporal2;
    }
}

function two(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"2";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"2";
        result.textContent=temporal2;
    }
}

function three(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"3";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"3";
        result.textContent=temporal2;
    }
}

function four(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"4";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"4";
        result.textContent=temporal2;
    }
}

function five(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"5";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"5";
        result.textContent=temporal2;
    }
}

function six(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"6";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"6";
        result.textContent=temporal2;
    }
}

function seven(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"7";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"7";
        result.textContent=temporal2;
    }
}

function eight(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"8";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"8";
        result.textContent=temporal2;
    }
}

function nine(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+"9";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+"9";
        result.textContent=temporal2;
    }
}

function dot(){
    if(flagOperation==0){ //es el primer numero
        temporal1=temporal1+".";
        result.textContent=temporal1;
    }else{ //es el segundo numero
        temporal2=temporal2+".";
        result.textContent=temporal2;
    }
}

function ce(){
    if(flagOperation==0){ //es el primer numero
        temporal1="";
        result.textContent="0";
    }else{ //es el segundo numero
        temporal2="";
        result.textContent="0";
    }
}

function ac(){
    temporal1="";
    temporal2="";
    flagOperation=0;
    result.textContent="0";

}

function operationSelected(operator){
    switch(operator){
        case "plus":
            flagOperation=1; //se ingresa el primer numero y se trabaja ahora con el segundo
            operation = "plus";//operacion seleccionada
            result.textContent="0";//se limpia la pantalla
            break;
        case "minus":
            flagOperation=1;
            operation = "minus";
            result.textContent="0";
            break;
        case "multiply":
            flagOperation=1;
            operation = "multiply";
            result.textContent="0";
            break;   
        case "divide":
            flagOperation=1;
            operation = "divide";
            result.textContent="0";
            break;     
    }
}

function equal(){
    if(flagOperation==1 && temporal2!=""){
        switch(operation){
            case "plus":
                flagOperation=0;//Se reinicia le bandera de operacion
                temporal1 = Number(temporal1)+Number(temporal2);//El resultado se pone en la variable 1 por si se desea hacer una nueva operacion con el resultado
                temporal2 = "";//se limpia la variable 2 por si se desea agregar una nueva operacion de forma consecutiva
                result.textContent=temporal1.toString();//el resultado se muestra en pantalla
                break;
            case "minus":
                flagOperation=0;
                temporal1 = Number(temporal1)-Number(temporal2);
                temporal2 = "";
                result.textContent=temporal1.toString();
                break;
            case "multiply":
                flagOperation=0;
                temporal1 = Number(temporal1)*Number(temporal2);
                temporal2 = "";
                result.textContent=temporal1.toString();
                break;  
            case "divide":
                flagOperation=0;
                temporal1 = Number(temporal1)/Number(temporal2);
                temporal2 = "";
                result.textContent=temporal1.toString();
                break;
        }
    }
}
