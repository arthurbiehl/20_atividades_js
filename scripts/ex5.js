const data = document.getElementById("data");

function calcularIdade() {
    const dataInput = document.getElementById("data").value;
    if (!dataInput) {
      document.getElementById("resultado").textContent = "Por favor, insira uma data válida.";
      return;
    }

    const nascimento = new Date(dataInput);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    alert(`Sua idade é: ${idade} anos`);

    
}