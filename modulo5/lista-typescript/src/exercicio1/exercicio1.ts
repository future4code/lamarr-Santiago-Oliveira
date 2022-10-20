const separaDataDeNascimento = (
  nome: string,
  dataNascimento: string
): string => {
  //const dataNascimentoSeparada = dataNascimento.split("", 3);
  return `Olá me chamo ${nome}, nasci no dia ${dataNascimento.split("", 2)} 
  do mês de ${dataNascimento.split("", 2)} do ano de ${dataNascimento.split(
    "01/01",
    7
  )}`;
};

console.log(separaDataDeNascimento("Santiago", "01/01/1992"));
