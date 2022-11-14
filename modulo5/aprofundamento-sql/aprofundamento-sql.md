```

-- RENAME TABLE Filmes TO Movies;

-- SET SQL_SAFE_UPDATES = 0;

-- EXERCICIO 1
/* A) Comando ALTER TABLE define o nome da tabela da qual deseja remover ou excluir a coluna. 
DROP COLUMN nome da coluna que deseja excluir na cláusula DROP. */

/* B) ALTER TABLE define o nome da tabela da qual deseja fazer alterações.
CHANGE gender gender VARCHAR(255) define a quantidade de caracteres pode ser aceitos
*/

/* C) ALTER TABLE define o nome da tabela da qual deseja fazer alterações.
CHANGE gender gender VARCHAR(255) define a quantidade de caracteres pode ser aceitos
*/

-- D)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- EXERCICIO 2
-- A)

UPDATE Actor
SET nome = "Moacyr Franco",
	birth_date = '1992-01-01'
WHERE id = "003";

-- B)
UPDATE Actor
SET nome = "JULIANA PÃES"
WHERE nome = "Juliana Paes";

-- C)
UPDATE Actor
SET nome = "Juliana Paes",
	salary = 100000000,
    birth_date = "2022-03-20"
WHERE id = "005";

-- D)
UPDATE Actor
SET nome = "Camarão"
WHERE id = "550";
-- Mostra que rodou e não gerou nenhum erro.alter

-- EXERCICIO 3
-- A)
DELETE FROM Actor 
WHERE nome = "Fernanda Montenegro";

-- B)
DELETE FROM Actor 
WHERE gender = "male" AND salary > 300000;

-- EXERCICIO 4
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;

-- A) 
	SELECT MAX(salary) FROM Actor;
-- B)
	SELECT MIN(salary) FROM Actor WHERE gender = "female";
-- C)
	SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- D)
	SELECT SUM(salary) FROM Actor;
    
-- EXERCICIO 5
	SELECT * FROM Actor limit 3;
    
    SELECT * FROM 	Actor ORDER BY nome ASC;
    
    SELECT * FROM Actor ORDER BY nome ASC LIMIT 4;
    
    SELECT * FROM Actor
    WHERE gender = "female"
    ORDER BY nome ASC
    LIMIT 4;
    
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender;
    
-- A)
	-- COUNT faz a contagem de quantos atores têm na coluna gênero e agrupa (GROUP BY) 
-- B)
	SELECT id, nome FROM Actor 
    ORDER BY nome DESC;
-- C)
	SELECT * FROM Actor 
    ORDER BY salary; 
-- D)
    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;
    
-- E)
	SELECT AVG(salary), gender 
    FROM Actor
    GROUP BY gender;
    
-- EXERCICIO  6
-- A)
	ALTER TABLE Movies 
    ADD playing_limit_date DATE;
-- B)
	ALTER TABLE Movies CHANGE
    avalicao rating FLOAT;
    
-- C)
	UPDATE Movies
    SET 
		playing_limit_date = "2022-11-25"
	WHERE id = "001";
    
-- D)
    DELETE FROM Movies WHERE id = "002";

    UPDATE Movies
	SET sinopse = "Alterando sinopse"
	WHERE id = "002";
    -- Ele roda como se tivesse dado certo
	
    
    
SELECT * FROM Movies;
SELECT * FROM Actor;

-- ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

-- ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

```
