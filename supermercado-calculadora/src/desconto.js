const VALOR_MINIMO_PARA_DESCONTO = 100;
const PERCENTUAL_DE_DESCONTO = 0.1;

/**
 * Verifica se o total da compra é elegível para desconto.
 * @param {number} totalDaCompra
 * @returns {boolean}
 */
const compraElegivelParaDesconto = (totalDaCompra) =>
  totalDaCompra > VALOR_MINIMO_PARA_DESCONTO;

/**
 * Aplica o desconto ao total da compra, se elegível.
 * Retorna um objeto com o valor original, o desconto aplicado e o valor final.
 * @param {number} totalDaCompra
 * @returns {{ valorOriginal: number, valorDoDesconto: number, valorFinal: number }}
 */
const aplicarDesconto = (totalDaCompra) => {
  const temDesconto = compraElegivelParaDesconto(totalDaCompra);
  const valorDoDesconto = temDesconto
    ? totalDaCompra * PERCENTUAL_DE_DESCONTO
    : 0;

  return {
    valorOriginal: totalDaCompra,
    valorDoDesconto,
    valorFinal: totalDaCompra - valorDoDesconto,
  };
};

module.exports = { aplicarDesconto };
