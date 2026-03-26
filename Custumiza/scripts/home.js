// 1. DADOS SIMULADOS (No futuro, virão do Banco de Dados via Fetch)
const itensDoBanco = [
    { id: 1, nome: "Caneca de Café Branca", preco: 25.00, categoria: "Cerâmica", img: "caneca1.jpg", desc: "Cerâmica 325ml" },
    { id: 2, nome: "Garrafa Inox Rosa", preco: 55.00, categoria: "Térmicas", img: "termica1.jpg", desc: "Mantém 12h gelado" },
    { id: 3, nome: "Caneca Vidro Jateado", preco: 35.00, categoria: "Vidro", img: "vidro1.jpg", desc: "Vidro resistente" },
    { id: 4, nome: "Caneca Mágica Preta", preco: 45.00, categoria: "Mágicas", img: "magica1.jpg", desc: "Revela foto com calor" },
    // Adicione mais se quiser testar o scroll
];

// 2. SELEÇÃO DE ELEMENTOS DO HTML
const gradeProdutos = document.getElementById('gradeProdutos');
const menuCategorias = document.getElementById('menuCategorias');
const contadorProdutos = document.getElementById('contadorProdutos');
const campoBusca = document.getElementById('campoBusca');

// 3. FUNÇÃO PARA EXIBIR OS PRODUTOS
function renderizarProdutos(lista) {
    // Limpa a grade antes de mostrar os novos
    gradeProdutos.innerHTML = "";
    
    // Atualiza o contador de produtos encontrados
    contadorProdutos.innerText = `${lista.length} produtos encontrados`;

    lista.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produtoCard';
        
        card.innerHTML = `
            <img src="img/${produto.img}" alt="${produto.nome}">
            <div class="info">
                <span class="tag-cat">${produto.categoria}</span>
                <h3>${produto.nome}</h3>
                <p>${produto.desc}</p>
                <div class="preco-area">
                    <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
                    <button onclick="adicionarAoCarrinho(${produto.id})">🛒</button>
                </div>
            </div>
        `;
        gradeProdutos.appendChild(card);
    });
}

// 4. FUNÇÃO PARA GERAR CATEGORIAS AUTOMATICAMENTE
function gerarCategorias() {
    // Pegamos todas as categorias e removemos duplicatas
    const categoriasUnicas = ['Todas', ...new Set(itensDoBanco.map(p => p.categoria))];

    menuCategorias.innerHTML = ""; // Limpa o nav

    categoriasUnicas.forEach(cat => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        btn.onclick = () => filtrarPorCategoria(cat);
        menuCategorias.appendChild(btn);
    });
}

// 5. LÓGICA DE FILTRO E BUSCA
function filtrarPorCategoria(categoria) {
    if (categoria === 'Todas') {
        renderizarProdutos(itensDoBanco);
    } else {
        const filtrados = itensDoBanco.filter(p => p.categoria === categoria);
        renderizarProdutos(filtrados);
    }
}

// Evento de busca por digitação
campoBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const busca = itensDoBanco.filter(p => 
        p.nome.toLowerCase().includes(termo) || 
        p.categoria.toLowerCase().includes(termo)
    );
    renderizarProdutos(busca);
});

// 6. INICIALIZAÇÃO
// Quando a página carrega, o JS executa as funções iniciais
window.onload = () => {
    gerarCategorias();
    renderizarProdutos(itensDoBanco);
};

// Exemplo de função para o carrinho
function adicionarAoCarrinho(id) {
    alert(`Produto ${id} adicionado ao carrinho!`);
}