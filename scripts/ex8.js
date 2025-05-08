function verificar() {
    const palavra = document.getElementById("palavra").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");

    if (palavra === "") {
        resultado.textContent = "Por favor, digite uma palavra.";
        return;
    }

    const invertida = palavra.split("").reverse().join("");
    
    if (palavra === invertida) {
        resultado.textContent = `"${palavra}" é um palíndromo!`;
    } else {
        resultado.textContent = `"${palavra}" não é um palíndromo.`;
    }
}