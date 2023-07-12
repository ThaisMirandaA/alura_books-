const botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

botaoOrdenarPorPreco.addEventListener('click', ordenaLivrosPorPreco);

function ordenaLivrosPorPreco() {
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibeLivrosNaTela(livrosOrdenados);
}