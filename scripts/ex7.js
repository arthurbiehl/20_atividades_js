const nomeInput = document.getElementById("nome");
const cardContainer = document.getElementById("cards");

function create() {
    const nome = nomeInput.value;
    localStorage.setItem("nome", nome);
    alert("Item salvo com sucesso");

    criarCard(nome);
}

function criarCard(nome) {
    cardContainer.innerHTML += `
        <div class="card">
            <h1>${nome}</h1>
            <button onclick="excluir()"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>
    `;
}

function excluir() {
    localStorage.removeItem("nome");
    cardContainer.innerHTML = "";
}
