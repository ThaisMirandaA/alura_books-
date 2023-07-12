let livros = [];
buscaLivros();

async function buscaLivros() {
    let consultaLivros = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    livros = await consultaLivros.json();
    livros = aplicaDesconto(livros);
    exibeLivrosNaTela(livrosComDesconto);
}


