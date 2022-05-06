//inicializar mi contador
let count=0;

//traer el elemento
let value = document.getElementById("contador");

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
