CREATE DATABASE supermercado_db;
USE supermercado_db;

-- ============================================================
--  SUPERMERCADO — SCRIPT SQL
--  Criação das tabelas, dados de exemplo e as 3 questões
-- ============================================================
-- ------------------------------------------------------------
--  CRIAÇÃO DAS TABELAS
-- ------------------------------------------------------------

CREATE TABLE Produtos (
    ID_Produto     INT           PRIMARY KEY,
    Nome_Produto   VARCHAR(100)  NOT NULL,
    Preco_Unitario DECIMAL(10,2) NOT NULL
);

CREATE TABLE Compras (
    ID_Compra  INT PRIMARY KEY,
    ID_Produto INT NOT NULL,
    Quantidade INT NOT NULL,
    FOREIGN KEY (ID_Produto) REFERENCES Produtos(ID_Produto)
);

-- ------------------------------------------------------------
--  DADOS DE EXEMPLO
-- ------------------------------------------------------------

INSERT INTO Produtos (ID_Produto, Nome_Produto, Preco_Unitario) VALUES
    (1, 'Arroz',  15.00),
    (2, 'Feijão',  8.00),
    (3, 'Óleo',    5.00);

INSERT INTO Compras (ID_Compra, ID_Produto, Quantidade) VALUES
    (101, 1, 2),
    (102, 2, 1),
    (103, 3, 3);


-- ============================================================
--  QUESTÃO 1
--  Valor total de cada compra
--  (ID da compra, nome do produto, quantidade, preço unitário
--   e valor total calculado)
-- ============================================================

SELECT
    c.ID_Compra,
    p.Nome_Produto,
    c.Quantidade,
    p.Preco_Unitario,
    (c.Quantidade * p.Preco_Unitario) AS Valor_Total
FROM Compras c
INNER JOIN Produtos p ON p.ID_Produto = c.ID_Produto
ORDER BY c.ID_Compra;

-- ============================================================
--  QUESTÃO 2
--  Produto mais vendido por quantidade total de unidades
-- ============================================================

SELECT
    p.ID_Produto,
    p.Nome_Produto,
    SUM(c.Quantidade) AS Quantidade_Total
FROM Compras c
INNER JOIN Produtos p ON p.ID_Produto = c.ID_Produto
GROUP BY p.ID_Produto, p.Nome_Produto
ORDER BY Quantidade_Total DESC
LIMIT 1;

-- Variação para empates:
-- SELECT
--    p.ID_Produto,
--    p.Nome_Produto,
--    SUM(c.Quantidade) AS Quantidade_Total
-- FROM Compras c
-- INNER JOIN Produtos p ON p.ID_Produto = c.ID_Produto
-- GROUP BY p.ID_Produto, p.Nome_Produto
-- HAVING SUM(c.Quantidade) = (
--    SELECT MAX(Quantidade_Por_Produto)
--    FROM (
--        SELECT SUM(Quantidade) AS Quantidade_Por_Produto
--        FROM Compras
--        GROUP BY ID_Produto
--    ) AS Totais
-- );

-- ============================================================
--  QUESTÃO 3
--  Todos os produtos com sua quantidade total comprada.
--  Produtos sem nenhuma compra registrada aparecem com
--  Quantidade_Total = 0 (graças ao LEFT JOIN + COALESCE).
-- ============================================================

SELECT
    p.ID_Produto,
    p.Nome_Produto,
    COALESCE(SUM(c.Quantidade), 0) AS Quantidade_Total
FROM Produtos p
LEFT JOIN Compras c ON c.ID_Produto = p.ID_Produto
GROUP BY p.ID_Produto, p.Nome_Produto
ORDER BY p.ID_Produto;