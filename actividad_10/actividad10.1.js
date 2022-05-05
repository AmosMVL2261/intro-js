/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
const arr = [3,4,6,1,5,2,9,10,23,12];

if(arr.length != 0){
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log(arr);
    console.log(arr[1]);
    console.log(arr[arr.length-2]);
}else{
    console.log("Arreglo vacio");
}

/*
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/

const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

function suma(arreglo){
    let frase = "";
    for(let i=0;i<arreglo.length;i++){
        let suma = Number(arreglo[i].a)+Number(arreglo[i].b);
        if(i==0){
            frase+=suma+" "+arreglo[i].name;
        }else{
            frase+=" "+suma+" "+arreglo[i].name;
        }
    }
    return frase;
}

console.log(suma(coleccion));

/**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
     matriz = [7,2,5,3,5,3]
     br = [7,2,5,4,6,3,5,3]

     Los números que faltan en arr son [4,6]

*/

let matriz = [7,2,5,3,5,3];
let br = [7,2,5,4,6,3,5,3];
function quienesNoEstan(arreglo1, arreglo2){
    let tamanio = 0;
    let noEstan = [];
    //Que arreglo es mas grande, obtenemos su tamaño
    //Seleccionamos este porque el mas pequeño es al que le vana a faltar elementos
    //y vamos a comprarar los elementos del array grande con el pequeño
    if(arreglo1.length>arreglo2.length){
        tamanio=arreglo1.length;
    }else{
        tamanio=arreglo2.length;
    }
    for(let i=0;i<tamanio;i++){
        if(tamanio==arreglo1.length){
            if(arreglo2.includes(Number(arreglo1[i]))){
                continue;
            }else{
                noEstan.push(arreglo1[i]);
            }
        }else{
            if(arreglo1.includes(Number(arreglo2[i]))){
                continue;
            }else{
                noEstan.push(arreglo2[i]);
            }  
        }
    }
    return noEstan;
}
console.log(quienesNoEstan(matriz,br));
console.log(quienesNoEstan(br,matriz));


//Funciona
let noEstan=[];
for(let i=0;i<br.length;i++){
    if(matriz.includes(br[i])){
        continue;
    }else{
        noEstan.push(br[i]);
    }  
}
console.log(noEstan);