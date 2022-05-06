//inicializar mi contador
let count=0;

//traer el elemento
let value = document.getElementById("contador");
const botton1 = document.querySelector("#incrementar")
const botton2 = document.querySelector("#decrementar")
const botton3 = document.querySelector("#resetear")

//Evento click
botton1.addEventListener('click', () => {increment();});
botton2.addEventListener('click', () => {decrement();});
botton3.addEventListener('click', () => {reset();});

//metodo del evento incrementar
function increment(){
    count++;
    value.textContent=count;
}

//decrementar sin llegar a negativos
function decrement(){
    if(count>0){
        count--;
        value.textContent=count;
    }
}

//resetear
function reset(){
    count=0;
    value.textContent=count;
}
