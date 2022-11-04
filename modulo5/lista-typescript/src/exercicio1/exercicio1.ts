const separaDataDeNascimento = (
  nome: string,
  dataNascimento: string
): string => {
  const dataNascimentoSeparada: string[] = dataNascimento.split("/");
  return `Olá me chamo ${nome}, nasci no dia ${dataNascimentoSeparada[0]} 
  do mês de ${dataNascimentoSeparada[1]} do ano de ${dataNascimentoSeparada[2]}`;
};

console.log(separaDataDeNascimento("Santiago", "01/01/1992"));
