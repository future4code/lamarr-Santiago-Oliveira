```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    COMMENT TEXT NOT NULL,
	rate FLOAT NOT NULL,
    Movie_id int,
    FOREIGN KEY (Movie_id) REFERENCES Movies(id)
);
-- EXERCICIO 1
-- a) Explique o que é uma chave estrangeira
/*Chave estrangeira, ou Foreign Key (FK), ou ainda chave externa
é a chave que permite a referência a registros oriundos de outras tabelas.
 Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.
Uma chave estrangeira é a representação de um relacionamento entre tabelas.*/

--  b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
ALTER TABLE Movies
ADD comment DATE;

ALTER TABLE Movies
MODIFY comment VARCHAR(255);

INSERT INTO Rating (id, COMMENT, rate, Movie_id)
VALUES (
	"002",
    "Muito bom!",
    7,
	"004"
);

-- c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
/* Da erro: Código de erro: 1062. Duplicar a entrada '050' para a chave 'PRIMÁRIO'.
 Acredito que a query não consegue encontrar o id para incluir a avaliação,
 não localiza a chave primary para vincular com a tabela de avaliações.*/
INSERT INTO Rating (id, COMMENT, rate, Movie_id)
VALUES (
	"050",
    "Muito bom!",
    7,
	"054"
);

-- d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movies
DROP COLUMN rating;

-- e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
/*Código de erro: 1451. Não é possível apagar ou actualizar uma linha principal:
uma restrição de chave estrangeira falha .`Rating`,
CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`Movie_id`) REFERENCES `Movies` (`id`))
Informa que não é possível apagar o filme pois sua id está vinculada a uma chave estrangeira*/

DELETE FROM Movies
WHERE id = 004;

-- EXERCICIO 2
CREATE TABLE MovieCast (
		Movie_id int,
		Actor_id VARCHAR(255),
    FOREIGN KEY (Movie_id) REFERENCES Movies(id),
    FOREIGN KEY (Actor_id) REFERENCES Actor(id)
);

-- a) Explique, com as suas palavras, essa tabela
/* Tabela vinculada com a tabela de filmes e de atores*/

-- b) Crie, ao menos, 6 relações nessa tabela
INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"001",
    "002"
);

INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"001",
    "005"
);

INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"001",
    "007"
);

INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"004",
    "007"
);

INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"004",
    "002"
);

INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"003",
    "006"
);

-- c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
/* Falha em uma chave estrangeira, porque não consegue associar/localizar o id do filme */
INSERT INTO MovieCast (Movie_id, Actor_id)
VALUES	(
	"002",
    "006"
);

-- d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
/*Código de erro: 1175. Está a usar o modo de actualização seguro e tentou actualizar uma tabela sem
 um ONDE usa uma coluna KEY. Não é possível utilizar o acesso ao intervalo no índice 'PRIMÁRIO' devido ao tipo
 ou conversão de agrupamento no campo 'id'. Para desactivar o modo seguro,
alternar a opção em Preferências -> Editor SQL e voltar a ligar.*/
DELETE FROM Actor
WHERE ID = 005;

-- EXERCICIO 3
SELECT * FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- a) Explique, com suas palavras, a query acima. O que é o operador ON?
/* ON = Onde, pegue avaliações onde files.id */

-- b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT m.id as movies_id, m.nome as movies_nome, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

DESCRIBE Movies;
DESCRIBE Actor;
SELECT * FROM Movies;
SELECT * FROM Actor;
SELECT * FROM Rating;
SELECT * FROM MovieCast;
SHOW TABLES;

```
