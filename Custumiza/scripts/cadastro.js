const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    // 1. Validação de Senhas Iguais
    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem! Por favor, verifique.");
        return;
    }

    // 2. Validação de Tamanho da Senha
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // 3. Objeto com os dados para o Banco (Preparação para o Node.js)
    const novoUsuario = {
        nomeUsuario: nome,
        emailUsuario: email,
        senhaUsuario: senha // No futuro, o Node.js vai criptografar isso!
    };

    console.log("Dados prontos para envio ao servidor:", novoUsuario);

    // SIMULAÇÃO DE SUCESSO
    alert(`Olá ${nome}, seu cadastro foi realizado com sucesso!`);
    
    // Redireciona para o login para ele entrar na conta nova
    window.location.href = "login.html";
});