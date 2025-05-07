const altura = document.getElementById('numero1')
const peso = document.getElementById('numero2')

function contar() {
    const alt = parseFloat(altura.value)
    const ps = parseFloat(peso.value)
    const conta = ps / (alt * alt)

    alert("Seu IMC é " + conta)
}