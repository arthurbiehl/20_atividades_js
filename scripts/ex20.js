
function calcularMedia() {
  const inputs = document.querySelectorAll(".nota");
  const resultado = document.getElementById("resultado");

  const notas = Array.from(inputs)
    .map(input => parseFloat(input.value))
    .filter(n => !isNaN(n));

  if (notas.length < 3) {
    resultado.innerHTML = "<p>Digite pelo menos 3 notas válidas.</p>";
    return;
  }

  const soma = notas.reduce((acc, val) => acc + val, 0);
  const media = soma / notas.length;

  let status;
  if (media >= 7) {
    status = "Aprovado";
  } else if (media >= 5) {
    status = "Recuperação";
  } else {
    status = "Reprovado";
  }

  resultado.innerHTML = `
    <p>Média: <strong>${media.toFixed(2)}</strong></p>
    <p>Status: <strong>${status}</strong></p>
  `;
}
