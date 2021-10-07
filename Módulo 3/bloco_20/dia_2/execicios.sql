SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 
    1 AS primeira_coluna,
    2 AS segunda_coluna,
    3 AS terceira_coluna;
SELECT 10 + 15;
SELECT 10 + 15;
SELECT 
    *
FROM
    Scientists.Scientists;
SELECT Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" FROM Scientists.Projects;
SELECT Name FROM Scientists.Scientists ORDER BY Name;
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS 'Textin bunitin' FROM Scientists.Projects;
SELECT Name AS "Nome do projeto", Hours AS "Horas" FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name AS "Projetos", Hours AS "Horas" FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name AS "Projetos", Hours AS "Horas" FROM Scientists.Projects ORDER BY Hours LIMIT 1;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS "Outro textin bunitin" FROM Scientists.Scientists;