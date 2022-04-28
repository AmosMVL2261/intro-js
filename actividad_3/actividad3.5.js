let num1 = Number(window.prompt("Ingrese un número"));
let num2 = Number(window.prompt("Ingrese un número"));
let num3 = Number(window.prompt("Ingrese un número"));
/*
Combinaciones posibles:
-Todas son iguales (1)
-Si dos números son iguales:
    1-1 No es necesario 
    1-2 
    1-3
    2-1 Repetido 1-2
    2-2 No es necesario
    2-3
    3-1 Repetido 1-3
    3-2 Repetido 2-3
    3-3 No es necesario
-Casos individuales (3) (Un número es mayor a los otros dos)
*/
if(num1 === num2 && num3 === num1){
    document.write("\n<p>Los tres numeros son iguales</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
} else if(num1 === num2 && num1 > num3) {
    document.write("\n<p>El primer y segundo número son mayores</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
} else if(num1 === num3 && num1 > num2) {
    document.write("\n<p>El primer y tercer número son mayores</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
} else if(num2 === num3 && num2 > num1) {
    document.write("\n<p>El segundo y tercer número son mayores</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
} else if(num1>num2 && num1>num3) {
    document.write("\n<p>El primer número es mayor</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
} else if(num2>num1 && num2>num3) {
    document.write("\n<p>El segundo número es mayor</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
} else if(num3>num1 && num3>num2) {
    document.write("\n<p>El tercer número es mayor</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
    document.write("\n<p>Tercer número: "+num3+"</p>\n");
}
