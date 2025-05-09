  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;

  function verificarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      mensagem.innerHTML = "<p>Digite um número entre 1 e 100.</p>";
      return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
      mensagem.innerHTML = `<p>🎉 Parabéns! Você acertou o número ${numeroSecreto} com ${tentativas} tentativa(s)!</p>`;
    } else if (palpite < numeroSecreto) {
      mensagem.innerHTML = `<p>🔼 O número é <strong>maior</strong> que ${palpite}.</p>`;
    } else {
      mensagem.innerHTML = `<p>🔽 O número é <strong>menor</strong> que ${palpite}.</p>`;
    }
  }