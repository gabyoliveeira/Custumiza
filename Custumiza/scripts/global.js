// scripts/global.js

// 1. Função para atualizar o ícone do carrinho em qualquer página
function atualizarMiniCarrinho() {
    const itensNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.innerText = itensNoCarrinho.length;
    }
}

// 2. Verificar se o usuário está logado para mudar o ícone de perfil
function verificarUsuarioLogado() {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const areaIcones = document.querySelector('.icones');
    
    if (usuario && areaIcones) {
        // Se estiver logado, mostra o nome ou botão sair
        // areaIcones.innerHTML = `<span>Olá, ${usuario.nome}</span>`;
    }
}

// Executa assim que qualquer página carregar
window.addEventListener('DOMContentLoaded', () => {
    atualizarMiniCarrinho();
    verificarUsuarioLogado();
});