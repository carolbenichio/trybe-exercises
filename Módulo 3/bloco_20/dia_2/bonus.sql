SELECT Piece AS "Peça", Price AS "Preço" FROM PiecesProviders.Provides WHERE Provider LIKE 'RBT';
SELECT Piece AS "Peças", Price AS "Preço" FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
SELECT Provider AS "Provedor", Price AS "Preço" FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT * FROM PiecesProviders.Provides WHERE Provider LIKE 'HAL' ORDER BY Price DESC;
SELECT COUNT(Provider) FROM Provides WHERE Piece LIKE '1';