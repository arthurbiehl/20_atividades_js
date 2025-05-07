
const numero = document.getElementById('numero');

function verificar(){
    const num = numero.value;

    if(num % 2 == 0){
        alert("Este numero é par! " + num)
    }else {
        alert("Este numero é impar! " + num)
    }
}