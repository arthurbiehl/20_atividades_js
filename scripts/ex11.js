    function calcularNotas() {
      let valor = parseInt(document.getElementById('numero').value);
      if (isNaN(valor) || valor < 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um valor válido.';
        return;
      }

      let notas = [100, 50, 10, 1];
      let resultado = '';

      for (let nota of notas) {
        let quantidade = Math.floor(valor / nota);
        if (quantidade > 0) {
          resultado += `Notas de R$${nota}: ${quantidade}<br>`;
          valor %= nota;
        }
      }

      document.getElementById('resultado').innerHTML = resultado;
    }