```
USE `database-name`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- VARCHAR(n) - String com no máximo N caracteres
-- DATE - Representa data (YYYY-MM-DD)
-- PRIMARY KEY - Chave primária (chave única na tabela)
-- NULL / NOT NULL - Indica se a coluna pode ser ou não pode ser nula

-- SHOW DATABASES - mostra os bancos de dados presentes no sistema
-- SHOW TABLES - mostra as tabelas do banco de dados atual

-- DESCRIBE Actor - mostra a estrutura da tabela, suas colunas

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUE (
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUE (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

-- Gera erro pois ocorre entreda duplicada de chave primária
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUE (
	"002",
    "Renato Russo",
    1300000,
    "1940-05-03",
    "male"
);
-- Erro porque a quantidade de valores não corresponde com a quantidade de dados da lista
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUE (
	"003",
	"Fernanda Montenegro",
	300000,
	"1929-10-19",
	"female"
);

-- Erro porque não tem o nome é precisa pois colocamos como NOT NULL
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "004",
  "Xuxa",
  400000,
  "1949-04-18",
  "male"
);

-- Valor incorreto da data de acordo com a da tabela que criamos(estrutura) que criamos
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "006",
  "Luciano Hulk",
  50000,
  "1980-11-05",
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "007",
  "Faustão",
  75000.00,
  "1962-05-19",
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "008",
  "Antônio Fagundes",
  400000,
  "1949-04-18",
  "male"
);

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, nome FROM Actor WHERE gender = "male";

SELECT id, nome FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE nome = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid"; -- Retornar 0 pois não tem nenhuma com valor "invalid"

SELECT id, nome, salary FROM Actor WHERE salary < 500000;

SELECT id, nome FROM Actor WHERE id = "002"; -- não gerou erro

SELECT * FROM Actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000;
-- Busca todos os atores e atrizes que o nome começa com A ou J e com salários maior que 300000,
-- o comando LIKE faz a comparação de strings e o % representa uma string genérica.
-- O operador OR representa ou e o AND o e

SELECT * FROM Actor WHERE nome NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE nome LIKE "%G%" OR nome LIKE "%g%";

SELECT * FROM Actor
WHERE (nome LIKE "%a%" OR nome LIKE "%A%" OR nome LIKE "%g%" OR nome LIKE "%G%")
AND salary BETWEEN 35000 AND 900000;

CREATE TABLE Filmes (
	id INT PRIMARY KEY NOT NULL auto_increment,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avalicao INT NOT NULL
);

-- TEXT é um tipo de dados de comprimento variável que pode armazenar cadeias de caracteres longas.

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avalicao)
VALUE (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avalicao)
VALUE (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avalicao)
VALUE (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avalicao)
VALUE (
	"004",
    "Tô Ryca",
    "Selminha é uma frentista que recebe uma herança de família, mas somente se cumprir o desafio de gastar 30 milhões de reais em 30 dias, sem acumular nada. No entanto, nessa maratona, ela descobre que tem coisas que o dinheiro não compra..",
    "2016-09-22",
    8
);

SELECT id, nome, avalicao FROM Filmes WHERE id = "1";

SELECT * FROM Filmes WHERE nome = "Tô Ryca";

SELECT id, nome, sinopse FROM Filmes WHERE avalicao = 7;

SELECT * FROM Filmes WHERE nome = "%vida%";

SELECT * FROM Filmes WHERE nome LIKE "%picucha%" OR sinopse LIKE "%picucha%";

SELECT * FROM Filmes WHERE data_lancamento > "2016-01-01";

SELECT * FROM Filmes
WHERE data_lancamento < CURDATE()
AND (nome LIKE "%picucha%" OR sinopse LIKE "%picucha%")
AND avalicao > 7;


```
