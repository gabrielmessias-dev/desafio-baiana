/**
 * Lista de produtos da compra.
 * Cada produto contém: nome, quantidade e precoUnitario.
 */
const listaDeProdutos = [
  { nome: "Arroz", quantidade: 2, precoUnitario: 15.0 },
  { nome: "Feijão", quantidade: 1, precoUnitario: 8.0 },
  { nome: "Óleo", quantidade: 3, precoUnitario: 5.0 },
  { nome: "Carne", quantidade: 3, precoUnitario: 35.0 },

  // Exemplos para testar validações (descomente para testar):
  // { nome: "Produto inválido", quantidade: 0,  precoUnitario: 10.0  }, // quantidade zero
  // { nome: "Produto inválido", quantidade: -1, precoUnitario: 10.0  }, // quantidade negativa
  // { nome: "Produto inválido", quantidade: 2,  precoUnitario: -5.0  }, // preço negativo
];

module.exports = { listaDeProdutos };
