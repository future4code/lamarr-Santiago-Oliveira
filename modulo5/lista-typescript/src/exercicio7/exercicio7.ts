type EstoqueEntrada = {
  nome: string;
  quantidade: number;
  valorUnitario: number;
};

type EstoqueSaida = {
  nome: string;
  quantidade: number;
  valorUnitario: string;
};

const estoqueAtual: EstoqueEntrada[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const retornaListaOrdenadaPorQuantidade = (
  estoqueAtual: EstoqueEntrada[]
): EstoqueSaida[] => {
  let preco: string;
  let estoqueFinal: EstoqueSaida[] = [];

  for (let produto of estoqueAtual) {
    preco = ajustaPreco(produto.valorUnitario);
    estoqueFinal.push({ ...produto, valorUnitario: preco });
  }
  return estoqueFinal.sort((a, b) => a.quantidade - b.quantidade);
};

console.table(retornaListaOrdenadaPorQuantidade(estoqueAtual));
