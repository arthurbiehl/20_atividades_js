  const opcoes = ["Opção 1", "Opção 2", "Opção 3"];
  const votos = [0, 0, 0];

  function votar(indice) {
    votos[indice]++;
    mostrarResultados();
  }

  function mostrarResultados() {
    const total = votos.reduce((a, b) => a + b, 0);
    let html = "";

    opcoes.forEach((opcao, i) => {
      const porcentagem = total ? ((votos[i] / total) * 100).toFixed(1) : 0;
      html += `<p>${opcao}: ${votos[i]} votos (${porcentagem}%)</p>`;
    });

    html += `<p><strong>Total de votos:</strong> ${total}</p>`;
    document.getElementById("resultados").innerHTML = html;
  }