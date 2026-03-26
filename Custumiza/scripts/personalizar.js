const inputTexto = document.getElementById('inputTexto');
const textoPreview = document.getElementById('textoPreview');
const corCaneca = document.getElementById('corCaneca');
const canecaPreview = document.getElementById('canecaPreview');
const corTexto = document.getElementById('corTexto');

inputTexto.addEventListener('input', () => {
    textoPreview.innerText = inputTexto.value || "Sua Frase Aqui";
});

corCaneca.addEventListener('input', () => {
    canecaPreview.style.backgroundColor = corCaneca.value;
});

corTexto.addEventListener('input', () => {
    textoPreview.style.color = corTexto.value;
});