const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

function somar(){

    const num1 = parseInt(numero1.value);
    const num2 = parseInt(numero2.value);
    const resultado = num1 + num2;
    alert(`O resultado da soma é: ${resultado}`);
}

function subtracao(){
    const num1 = parseInt(numero1.value);
    const num2 = parseInt(numero2.value);
    const resultado = num1 - num2;
    alert(`O resultado da subtração é: ${resultado}`);
}

function multiplicacao(){
    const num1 = parseInt(numero1.value);
    const num2 = parseInt(numero2.value);
    const resultado = num1 * num2;
    alert(`O resultado da multiplicação é: ${resultado}`);
}

function divisao(){
    const num1 = parseInt(numero1.value);
    const num2 = parseInt(numero2.value);
    const resultado = num1 / num2;
    alert(`O resultado da divisão é: ${resultado}`);
}

