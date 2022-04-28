let num1 = Number(window.prompt("Ingrese un número"));
let num2 = Number(window.prompt("Ingrese un número"));
if(num1>num2){
    document.write("\n<p>El primer número es mas grande</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
} else {
    document.write("\n<p>El segundo número es mas grande</p>\n");
    document.write("\n<p>Primer número: "+num1+"</p>\n");
    document.write("\n<p>Segundo número: "+num2+"</p>\n");
}