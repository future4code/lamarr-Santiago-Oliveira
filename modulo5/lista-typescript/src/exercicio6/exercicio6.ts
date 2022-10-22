type Cliente = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const contasClientes: Cliente[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const retornaClienteSaldoNegativo = (contasClientes: Cliente[]): Cliente[] => {
  let soma: number = 0;
  let debitoTotal: Cliente[] = [];
  for (let conta of contasClientes) {
    for (let i = 0; i < conta.debitos.length; i++) {
      soma += conta.debitos[i];
    }
    if (conta.saldoTotal - soma < 0) {
      debitoTotal.push({
        cliente: conta.cliente,
        saldoTotal: conta.saldoTotal - soma,
        debitos: [],
      });
    }
    soma = 0;
  }
  return debitoTotal;
};

console.table(retornaClienteSaldoNegativo(contasClientes));
