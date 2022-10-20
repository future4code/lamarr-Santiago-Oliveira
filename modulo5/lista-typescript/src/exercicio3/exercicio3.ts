enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  nome: string;
  anoLacamento: number;
  genero: string;
  pontuacaoSite?: number;
};

const catalogoDeFilmes: Filme[] = [
  {
    nome: "Marcas da Maldição",
    anoLacamento: 2022,
    genero: GENERO.TERROR,
  },

  {
    nome: "Rua do Medo",
    anoLacamento: 2021,
    genero: GENERO.TERROR,
    pontuacaoSite: 90,
  },

  {
    nome: "Naruto",
    anoLacamento: 2022,
    genero: GENERO.ACAO,
  },
];

const retornaInfoOrganizadas = (
  nome: string,
  anoLacamento: number,
  genero: GENERO,
  pontuacaoSite?: number
) => {
  const type: Filme = catalogoDeFilmes[2];
  return type;
};

console.log(retornaInfoOrganizadas("Rua do Medo", 2021, GENERO.TERROR));
