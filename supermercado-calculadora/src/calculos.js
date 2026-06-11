/**
 * Calcula o valor total de um item (quantidade × preço unitário).
 * @param {number} quantidade
 * @param {number} precoUnitario
 * @returns {number}
 */
const calcularValorDoItem = (quantidade, precoUnitario) =>
  quantidade * precoUnitario;

/**
 * Soma os valores totais de todos os produtos para obter o total da compra.
 * @param {Array<{ nome: string, quantidade: number, precoUnitario: number }>} listaDeProdutos
 * @returns {number}
 */
const calcularTotalDaCompra = (listaDeProdutos) =>
  listaDeProdutos.reduce((acumulador, produto) => {
    const valorDoItem = calcularValorDoItem(
      produto.quantidade,
      produto.precoUnitario
    );
    return acumulador + valorDoItem;
  }, 0);

/**
 * Formata um valor numérico como moeda brasileira (R$).
 * @param {number} valor
 * @returns {string}
 */
const formatarComoMoeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

module.exports = { calcularValorDoItem, calcularTotalDaCompra, formatarComoMoeda };
