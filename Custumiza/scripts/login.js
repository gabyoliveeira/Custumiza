const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação básica
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // SIMULAÇÃO: Aqui você faria o fetch para o Node.js
    console.log("Tentando logar com:", email);
    
    if (email === "admin@custumiza.com" && senha === "1234") {
        alert("Bem-vindo, Administrador!");
        window.location.href = "admin.html"; // Redireciona para o painel
    } else {
        alert("Login realizado com sucesso! Redirecionando...");
        window.location.href = "home.html"; // Redireciona usuário comum
    }
});