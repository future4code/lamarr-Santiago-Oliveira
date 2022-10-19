type Estatistica = {
  maior: number;
  menor: number;
  media: number;
};
function obterEstatisticas(numeros: number[]): Estatistica {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

console.log(obterEstatisticas([10, 20, 30]));

//a)
/* Entradas: Array de numeros
Saída: Valor maio, valor menor e a média. { maior: 30, menor: 10, media: 20 } */

//b) Variáveis: numerosOrdenados, soma, numeros e estatisticas. Number e arrays

type AmostraDeDados = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => Estatistica;
};

console.log(obterEstatisticas([10, 25, 30]));
