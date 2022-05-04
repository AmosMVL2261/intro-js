// Ejercicios de Objetos y sus métodos básicos:


/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
console.log(student.name);
console.log(student["age"]);
student.name = "Steve Jobs"
console.log(student.name);

/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.getOwnPropertyNames(student));

/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

if(student.name !== undefined){
    console.log("Existe");
}else{
    console.log("No existe");
}



/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
delete student.rollno;
console.log(Object.getOwnPropertyNames(student));

/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
La nueva edad debe ser 35.
 */ 

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.age=35;
console.log(student.age);

/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.pet = "dog";
console.log(Object.getOwnPropertyNames(student));
console.log(student.pet);


/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/

const objeto = {}
objeto.color=undefined;
objeto.tamano=undefined;
objeto.peso=undefined;
objeto.cantidad=undefined;
console.log(Object.getOwnPropertyNames(student));
console.log(objeto.color);
console.log(objeto.tamano);
console.log(objeto.peso);
console.log(objeto.cantidad);