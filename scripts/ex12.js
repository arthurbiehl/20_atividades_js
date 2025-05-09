

const tempo = document.getElementById('cronometro')
let segundos = 0;
let intervalo;

function atualizar() {
    tempo.textContent = segundos
}

function iniciar(){
    if(!intervalo) {
        intervalo = setInterval(()=> {
            segundos++;
            atualizar()
        },1000)
    }
}

function stoper() {
    clearInterval(intervalo)
    intervalo = null
}

function zerar() {
    stoper()
    segundos = 0;
    atualizar()
}