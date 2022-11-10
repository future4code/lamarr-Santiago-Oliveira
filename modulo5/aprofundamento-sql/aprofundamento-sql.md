```

 -- RENAME TABLE Filmes TO Movies;

-- SET SQL_SAFE_UPDATES = 0

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
WHERE gender = "male" AND salary > 1000000;

SELECT * FROM Movies;
SELECT * FROM Actor;

-- ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

-- ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

```
