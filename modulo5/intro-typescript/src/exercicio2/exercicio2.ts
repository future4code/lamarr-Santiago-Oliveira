const userInput = require("readline-sync");

const imprimeTresCoresFavoritas = (
  cor1: string,
  cor2: string,
  cor3: string
): string[] => {
  const coresFavoritas: string[] = [];
  const corFavorit1: string = userInput.question("Qual sua cor favorita 1? ");
  const corFavorit2: string = userInput.question("Qual sua cor favorita 2? ");
  const corFavorit3: string = userInput.question("Qual sua cor favorita 3? ");

  coresFavoritas.push(corFavorit1, corFavorit2, corFavorit3);

  return coresFavoritas;
};

console.log(
  imprimeTresCoresFavoritas("corFavorita1", "corFavorit2", "corFavorit3")
);
