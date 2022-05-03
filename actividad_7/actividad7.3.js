function palindromo(word){
    const palabra = word.split(""); //Convertimos a arreglo
    let tamanioPalabra = palabra.length - 1; //-1 Por el indice que mpieza en 0
    for(let i=0;i<palabra.length;i++){
        if(palabra[i]!=palabra[tamanioPalabra]){
            return false; //Compara extremos, si los extremos no son iguales regresa false
        }else{
            tamanioPalabra-=1; //En caso contrario 
        }
    }
    return true;
}
console.log(palindromo("madam"));