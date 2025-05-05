document.getElementById('btn-destaque').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.jogos').offsetTop,
    behavior: 'smooth'
  });
});

function mostrarDetalhes(nomeJogo) {
  alert("Você selecionou: " + nomeJogo);
}
