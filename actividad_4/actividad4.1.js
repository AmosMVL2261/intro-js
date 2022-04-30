let num = Number(window.prompt("Ingresa un número"));
let contador = 1;
document.write("\n<p>Numeros divisibles &#247; 5 desde 1 hastael numero ingresado "+num+"<p>\n")
if(contador>num){
    document.write("\n<p>Número no valido</p>\n");
} else{
    while(contador<=num){
        if(contador%5==0){
            document.write("\n<p>"+contador+"</p>\n");
        }
        contador++;
    }
}