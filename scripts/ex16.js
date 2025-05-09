function contar() {
  const texto = document.getElementById("texto").value.trim();
  const resultado = document.getElementById("resultado");

  const palavras = texto === "" ? 0 : texto.split(/\s+/).length;
  const letras = texto.replace(/\s/g, "").length;

  resultado.innerHTML = `
    <p>Palavras: <strong>${palavras}</strong></p>
    <p>Letras: <strong>${letras}</strong></p>
  `;
}