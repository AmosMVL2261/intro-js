function sumElements(arreglo){
    let total=0;
    for(let i=0;i<arreglo.length;i++){
        total+=arreglo[i];
    }
    return total;
}
let arreglo = [5,10,5,81,9,-20];
document.write(sumElements(arreglo));