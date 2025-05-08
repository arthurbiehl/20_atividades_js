const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');

function tabuada() {
    const num = Number(numero.value);
    resultado.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`;
    }
}