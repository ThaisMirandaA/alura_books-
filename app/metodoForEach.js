const secaoLivros = document.getElementById('livros');
const anuncioValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis'); 

function exibeLivrosNaTela(listaDeLivros) {
  anuncioValorTotalLivrosDisponiveis.innerHTML = ''; 
  secaoLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    let disponibilidade = verificaDisponibilidade();
    secaoLivros.innerHTML += `
        <div class="livro">
        <img class= "${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `

    function verificaDisponibilidade() {
      if (livro.quantidade > 0) {
        return 'livro__imagens';
      } else {
        return 'livro__imagens indisponivel';
      }
    }
  });
}