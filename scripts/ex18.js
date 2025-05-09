function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (!nome || !email || !senha) {
    mensagem.textContent = "Preencha todos os campos.";
    return false;
  }

  // Validação de formato de e-mail com regex simples
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    mensagem.textContent = "Digite um e-mail válido.";
    return false;
  }

  mensagem.textContent = "Formulário enviado com sucesso!";
  return false; // impedir envio real do formulário (para testes)
}