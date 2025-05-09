function verificarPrimo() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero) || numero < 1) {
    resultado.innerHTML = "<p>Digite um número válido maior que 0.</p>";
    return;
  }

  if (numero === 1) {
    resultado.innerHTML = "<p>1 não é primo.</p>";
    return;
  }

  let ehPrimo = true;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  resultado.innerHTML = ehPrimo
    ? `<p>${numero} é primo</p>`
    : `<p>${numero} não é primo</p>`;
}