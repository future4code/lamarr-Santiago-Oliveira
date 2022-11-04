//a)
// const minhaString: string = 10
// O tipo number não poder ser atributo ao tipo string

//b)
// let meuNumero: number | string = 25
// meuNumero = "string"
// Usamos Union Type: | para dizer um ou outro tipo (number ou string)

//c)

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

enum corFavorita {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  AZULESCURO = "Azul-escuro",
  VIOLETA = "Violeta",
}

const pessoa1: Pessoa = {
  nome: "Santiago",
  idade: 30,
  corFavorita: corFavorita.VERMELHO,
};

const pessoa2: Pessoa = {
  nome: "Fernanda",
  idade: 28,
  corFavorita: corFavorita.AZUL,
};

const pessoa3: Pessoa = {
  nome: "Pipoca",
  idade: 4,
  corFavorita: corFavorita.AMARELO,
};

const pessoa4: Pessoa = {
  nome: "Kinha",
  idade: 2,
  corFavorita: corFavorita.VIOLETA,
};

console.log(pessoa2);
