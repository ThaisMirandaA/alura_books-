function aplicaDesconto(listaDeLivros) {
    const desconto = 0.3;
    livrosComDesconto = listaDeLivros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto;
}