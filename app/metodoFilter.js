const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtraLivros));

function filtraLivros() {
    let btn = document.getElementById(this.id);
    let categoria = btn.value;
    let livrosFiltrados = categoria == 'disponivel' ? verificaDisponibilidade() : verificaAreaDeConhecimento(categoria);
    exibeLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel') {
        let valorTotalLivros = calculaValorTotalLivrosDisponiveis(livros);
        addAnuncioValorTotalLivrosDisponiveis(valorTotalLivros);
    }
}

function verificaAreaDeConhecimento(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function verificaDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function addAnuncioValorTotalLivrosDisponiveis(valorTotalLivros) {
    anuncioValorTotalLivrosDisponiveis.innerHTML +=
        `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivros}</span></p>
        </div>`
}
