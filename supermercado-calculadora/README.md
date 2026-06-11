# 🛒 Supermercado Calculadora

Sistema simples em JavaScript para calcular automaticamente o valor total das compras de um supermercado, com validação de produtos e aplicação de desconto condicional.

---

## 📁 Estrutura de Pastas

```
supermercado-calculadora/
├── src/
│   ├── produtos.js       → lista de produtos da compra (entrada de dados)
│   ├── validacoes.js     → regras de validação e filtro de produtos inválidos
│   ├── calculos.js       → cálculo dos valores e formatação de moeda
│   └── desconto.js       → lógica de desconto condicional
├── index.js              → ponto de entrada, orquestra o fluxo e exibe o resultado
└── README.md
```

---

## ▶️ Como executar

### Pré-requisito

Ter o [Node.js](https://nodejs.org/) instalado na máquina.

### Passos

```bash
# Clone ou crie o projeto na sua máquina
cd supermercado-calculadora

# Execute o programa
node index.js
```

---

## 🛍️ Como adicionar ou alterar produtos

Abra o arquivo `src/produtos.js` e edite o array `listaDeProdutos`:

```js
const listaDeProdutos = [
  { nome: "Arroz",  quantidade: 2, precoUnitario: 15.0 },
  { nome: "Feijão", quantidade: 1, precoUnitario: 8.0  },
  { nome: "Óleo",   quantidade: 3, precoUnitario: 5.0  },
  { nome: "Carne",  quantidade: 3, precoUnitario: 35.0 },
];
```

Cada produto exige três campos:

| Campo           | Tipo     | Regra                        |
|-----------------|----------|------------------------------|
| `nome`          | `string` | Nome do produto              |
| `quantidade`    | `number` | Deve ser **maior que zero**  |
| `precoUnitario` | `number` | Não pode ser **negativo**    |

---

## ✅ Regras de Validação

O sistema valida cada produto antes de calcular. Produtos inválidos são **ignorados** e um erro é exibido no console, sem interromper a execução.

Exemplos de produtos inválidos:

```js
{ nome: "Produto A", quantidade: 0,  precoUnitario: 10.0 }  // ❌ quantidade zero
{ nome: "Produto B", quantidade: -1, precoUnitario: 10.0 }  // ❌ quantidade negativa
{ nome: "Produto C", quantidade: 2,  precoUnitario: -5.0 }  // ❌ preço negativo
```

Saída no console para produtos inválidos:

```
❌ Produto ignorado — "Produto A": quantidade inválida (0). Deve ser maior que zero.
❌ Produto ignorado — "Produto B": quantidade inválida (-1). Deve ser maior que zero.
❌ Produto ignorado — "Produto C": preço unitário inválido (R$ -5). Não pode ser negativo.
```

---

## 🧾 Exemplos de Saída

### Compra sem desconto (total ≤ R$ 100,00)

Com os produtos: Arroz (2x R$15), Feijão (1x R$8) e Óleo (3x R$5):

```
========================================
         RESUMO DA COMPRA
========================================
Arroz        2x   R$ 15,00 =   R$ 30,00
Feijão       1x    R$ 8,00 =    R$ 8,00
Óleo         3x    R$ 5,00 =   R$ 15,00
----------------------------------------
Total da compra:   R$ 53,00
========================================
```

### Compra com desconto (total > R$ 100,00)

Adicionando Carne (3x R$35), o total sobe para R$ 158,00 e o desconto de 10% é aplicado automaticamente:

```
========================================
         RESUMO DA COMPRA
========================================
Arroz        2x   R$ 15,00 =   R$ 30,00
Feijão       1x    R$ 8,00 =    R$ 8,00
Óleo         3x    R$ 5,00 =   R$ 15,00
Carne        3x   R$ 35,00 =  R$ 105,00
----------------------------------------
Subtotal:          R$ 158,00
Desconto (10%):  -  R$ 15,80
----------------------------------------
Total final:    R$ 142,20
========================================
```

---

## 🏷️ Regra de Desconto

| Condição                        | Desconto |
|---------------------------------|----------|
| Total da compra > **R$ 100,00** | **10%**  |
| Total da compra ≤ R$ 100,00     | Sem desconto |

Quando o desconto é aplicado, o sistema exibe três linhas: o subtotal original, o valor do desconto e o valor final.

---

## 🧩 Responsabilidade de cada arquivo

### `src/produtos.js`
Define a lista de produtos que serão processados. É aqui que você altera os dados de entrada da compra.

### `src/validacoes.js`
Contém as funções `validarProduto` e `filtrarProdutosValidos`. Garante que apenas produtos com quantidade maior que zero e preço não negativo entrem no cálculo.

### `src/calculos.js`
Contém `calcularValorDoItem`, `calcularTotalDaCompra` e `formatarComoMoeda`. Realiza toda a aritmética e formata os valores no padrão brasileiro (R$).

### `src/desconto.js`
Contém `aplicarDesconto`. Verifica se o total ultrapassa R$ 100,00 e, se sim, retorna o valor original, o desconto e o valor final.

### `index.js`
Ponto de entrada da aplicação. Importa os módulos acima, orquestra o fluxo completo e exibe o resumo da compra no console.

---

## 🛠️ Tecnologias

- **Node.js** — ambiente de execução JavaScript
- Sem dependências externas — projeto 100% com módulos nativos