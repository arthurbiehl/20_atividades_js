const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const resultado = document.getElementById('resultado')

function sorteio() {
    const num1 = parseInt(numero1.value)
    const num2 = parseInt(numero2.value)

    if (num1 > num2) {
        resultado.innerHTML = `<p>O numero inicial tem que ser maior que o final!!</p>`
    } else {
        const sorteio = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

        resultado.innerHTML = `<p>${sorteio}</p>`
    }


}