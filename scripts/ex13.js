const tamanho = document.getElementById('tamanho')
const resultado = document.getElementById('resultado')

function gerarSenha() {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numero = '0123456789'
    const simbolos = '!@#$%^&*()_+-={}[]<>?'
    const todos = simbolos + numero + letras

    let senha = ''
    const comprimento = parseInt(tamanho.value)

    for(let i = 0; i< comprimento; i++) {
        const senhaAleatoria = Math.floor(Math.random() * todos.length);
        senha += todos[senhaAleatoria]
    }

    resultado.innerHTML = `<p>Sua senha: ${senha}</p>`


}