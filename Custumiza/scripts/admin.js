const form = document.getElementById('formCadastroProduto');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Criando o objeto exatamente como a tabela 'itens' pede
    const novoItem = {
        nomeItem: document.getElementById('nomeItem').value,
        precoItem: parseFloat(document.getElementById('precoItem').value),
        categoriaItem: document.getElementById('categoriaItem').value,
        urlImagemItem: document.getElementById('urlImagemItem').value,
        descItem: document.getElementById('descItem').value
    };

    console.log("Enviando para o Banco de Dados (tabela itens):", novoItem);

    // Simulação de salvar no LocalStorage para teste imediato
    let produtos = JSON.parse(localStorage.getItem('produtos_teste')) || [];
    produtos.push(novoItem);
    localStorage.setItem('produtos_teste', JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso!");
    form.reset(); // Limpa o formulário
});

// Botão sair
document.getElementById('btnSair').addEventListener('click', () => {
    window.location.href = "login.html";
});

// Função para carregar os produtos na tabela
function carregarProdutosTabela() {
    const tabela = document.getElementById('corpoTabelaProdutos');
    // Simulando busca do banco (ou localStorage por enquanto)
    const produtos = JSON.parse(localStorage.getItem('produtos_teste')) || [];

    tabela.innerHTML = ""; // Limpa a tabela

    produtos.forEach((prod, index) => {
        tabela.innerHTML += `
            <tr>
                <td><img src="${prod.urlImagemItem}" class="img-miniatura"></td>
                <td>${prod.nomeItem}</td>
                <td>R$ ${prod.precoItem.toFixed(2)}</td>
                <td>${prod.categoriaItem}</td>
                <td>
                    <button class="btn-editar" onclick="prepararEdicao(${index})">✏️</button>
                    <button class="btn-excluir" onclick="excluirProduto(${index})">🗑️</button>
                </td>
            </tr>
        `;
    });
}

// Função que joga os dados de volta para o formulário
function prepararEdicao(index) {
    const produtos = JSON.parse(localStorage.getItem('produtos_teste'));
    const p = produtos[index];

    document.getElementById('nomeItem').value = p.nomeItem;
    document.getElementById('precoItem').value = p.precoItem;
    document.getElementById('categoriaItem').value = p.categoriaItem;
    document.getElementById('urlImagemItem').value = p.urlImagemItem;
    document.getElementById('descItem').value = p.descItem;

    // Muda o botão de "Salvar" para "Atualizar"
    const btnSalvar = document.querySelector('.btn-salvar');
    btnSalvar.innerText = "Atualizar Produto";
    btnSalvar.style.backgroundColor = "#3498db";
    
    // Guardamos o index para saber qual editar depois
    form.dataset.modo = "editar";
    form.dataset.indexEdicao = index;
}

// Chamar ao carregar a página
window.onload = carregarProdutosTabela;