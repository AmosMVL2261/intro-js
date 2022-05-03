function comparacion(frase, palabra){
    if(frase.search(palabra)!=-1){
        return true;
    }else{
        return false;
    }
}
let frase = "Hola a todos"
let palabra = "todos"
console.log(comparacion(frase, palabra));
let palabra2 = "ayer"
console.log(comparacion(frase, palabra2));


/* **************************** */
function comparacion2(frase, palabra){
    let myArray = frase.split(" ");
    if(frase.includes(palabra)){
        return true;
    }else{
        return false;
    }
}
let frase3 = "Hola a todos"
let palabra3 = "todos"
console.log(comparacion2(frase3, palabra3));
let palabra4 = "ayer"
console.log(comparacion2(frase3, palabra4));