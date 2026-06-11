const { listaDeProdutos }       = require("./src/produtos");
const { filtrarProdutosValidos } = require("./src/validacoes");
const { calcularTotalDaCompra, formatarComoMoeda } = require("./src/calculos");
const { aplicarDesconto }        = require("./src/desconto");

/**
 * Exibe no console o resumo detalhado da compra.
 * @param {Array} produtosValidos
 * @param {{ valorOriginal, valorDoDesconto, valorFinal }} resumoFinanceiro
 */
const exibirResumoDaCompra = (produtosValidos, resumoFinanceiro) => {
  const { valorOriginal, valorDoDesconto, valorFinal } = resumoFinanceiro;
  const temDesconto = valorDoDesconto > 0;

  console.log("\n========================================");
  console.log("         RESUMO DA COMPRA");
  console.log("========================================");

  produtosValidos.forEach(({ nome, quantidade, precoUnitario }) => {
    const totalItem = quantidade * precoUnitario;
    console.log(
      `${nome.padEnd(12)} ${quantidade}x ${formatarComoMoeda(precoUnitario).padStart(10)} = ${formatarComoMoeda(totalItem).padStart(10)}`
    );
  });

  console.log("----------------------------------------");

  if (temDesconto) {
    console.log(`Subtotal:          ${formatarComoMoeda(valorOriginal).padStart(10)}`);
    console.log(`Desconto (10%):  - ${formatarComoMoeda(valorDoDesconto).padStart(10)}`);
    console.log("----------------------------------------");
    console.log(`Total final:    ${formatarComoMoeda(valorFinal).padStart(10)}`);
  } else {
    console.log(`Total da compra: ${formatarComoMoeda(valorFinal).padStart(10)}`);
  }

  console.log("========================================\n");
};

/**
 * Função principal: orquestra o fluxo completo do cálculo da compra.
 */
const calcularCompra = () => {
  const produtosValidos = filtrarProdutosValidos(listaDeProdutos);

  if (produtosValidos.length === 0) {
    console.error("Nenhum produto válido encontrado. Encerrando.");
    return;
  }

  const totalDaCompra   = calcularTotalDaCompra(produtosValidos);
  const resumoFinanceiro = aplicarDesconto(totalDaCompra);

  exibirResumoDaCompra(produtosValidos, resumoFinanceiro);
};

calcularCompra();
