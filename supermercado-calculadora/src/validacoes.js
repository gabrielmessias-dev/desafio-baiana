/**
 * Valida se a quantidade de um produto é válida (maior que zero).
 * @param {number} quantidade
 * @returns {boolean}
 */
const quantidadeEhValida = (quantidade) => quantidade > 0;

/**
 * Valida se o preço unitário de um produto é válido (não negativo).
 * @param {number} precoUnitario
 * @returns {boolean}
 */
const precoEhValido = (precoUnitario) => precoUnitario >= 0;

/**
 * Valida um produto completo e retorna um objeto com o resultado da validação.
 * @param {{ nome: string, quantidade: number, precoUnitario: number }} produto
 * @returns {{ valido: boolean, erros: string[] }}
 */
const validarProduto = (produto) => {
  const erros = [];

  if (!quantidadeEhValida(produto.quantidade)) {
    erros.push(
      `"${produto.nome}": quantidade inválida (${produto.quantidade}). Deve ser maior que zero.`
    );
  }

  if (!precoEhValido(produto.precoUnitario)) {
    erros.push(
      `"${produto.nome}": preço unitário inválido (R$ ${produto.precoUnitario}). Não pode ser negativo.`
    );
  }

  return { valido: erros.length === 0, erros };
};

/**
 * Filtra a lista de produtos, separando válidos de inválidos.
 * Exibe no console os erros encontrados para produtos inválidos.
 * @param {Array} listaDeProdutos
 * @returns {Array} lista apenas com produtos válidos
 */
const filtrarProdutosValidos = (listaDeProdutos) => {
  const produtosValidos = [];

  listaDeProdutos.forEach((produto) => {
    const { valido, erros } = validarProduto(produto);

    if (valido) {
      produtosValidos.push(produto);
    } else {
      erros.forEach((erro) => console.error(`Produto ignorado — ${erro}`));
    }
  });

  return produtosValidos;
};

module.exports = { filtrarProdutosValidos };
