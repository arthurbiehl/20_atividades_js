const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const passo = document.getElementById('passo')

function contar() {
    const num1 = Number(numero1.value)
    const num2 = Number(numero2.value)
    let pass = Number(passo.value)

    if (pass <= 0) {
        alert("DIGITE UM PASSO REAL")
        return
    }

    if (num1 < num2) {
        for (let i = num1; i <= num2; i += pass) {
            alert(i)
        }
    } else {
        for (let i = num1; i >= num2; i -= pass) {
            alert(i)
        }
    }

    numero1.value = ''
    numero2.value = ''
    passo.value = ''

}
