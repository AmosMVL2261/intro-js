let nombre = window.prompt("Ingrese su nombre");
let age = Number(window.prompt("Ingrese su edad"));
if(age>=18){
    if(nombre=="Mario" || nombre=="Carlos"){
        document.write("\n<p>Bienvenido, por favor, pase a la zona VIP</p>\n");
    }else {
        document.write("\n<p>Puede ingresar a la discoteca</p>\n");
    }
} else {
    document.write("\n<p>Usted es menor de edad, no puede ingresar a la discoteca</p>\n");
}