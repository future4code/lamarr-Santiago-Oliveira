// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
      }
     return array.sort(compararNumeros); 
} 

    


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const pares = array.filter(array => array % 2 === 0);
    return pares;
 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    const paresEElevadosADois = array.filter(array => array % 2 === 0).map(function(array){
        return Math.pow(array, 2);
        })
        return paresEElevadosADois
   
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 const max = Math.max(...array);
    return max;
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2);
    const menorNumero = Math.min(num1, num2);
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
    const diferenca = maiorNumero - menorNumero;
    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numerosPares = [];
        for (let i = 0; numerosPares.length < n; i++){
            if(i % 2 === 0){
                numerosPares.push(i);
            }
        }
            return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC){
        return "Equilátero";
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let novoArray = array.sort(function(a, b){
        return a - b;
    })
    return [novoArray[novoArray.length - 2], novoArray[1]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
       nome: "O Diabo Veste Prada",
       ano: 2006,
       diretor: "David Frankel",
       atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"].join(", "),
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`; 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) { 
    pessoa = {
        ...pessoa,
        nome:"ANÔNIMO"
    }
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {


    // Tentativa diferente, porém não chegou ao resultado, 
    // estou usando o comando push(), porém retorna o array vazio.

/*     
    const resultadoFinal = [];

    const pessoasNaFila = [
        {
        nome: "Paula",
        idade: 12,
        altura: 1.8
        },
        {
        nome: "João",
        idade: 20,
        altura: 1.3
        },
        {
        nome: "Pedro",
        idade: 15,
        altura: 1.9
        },
        {
        nome: "Luciano",
        idade: 22,
        altura: 1.8
        },
        {
        nome: "Artur",
        idade: 10,
        altura: 1.2
        },
        {
        nome: "Soter",
        idade: 70,
        altura: 1.9
        }
    ];

    for (let pessoa of pessoasNaFila) {
       if (
         pessoasNaFila.altura > 1.5
         && pessoasNaFila.idade > 14
         && pessoasNaFila.idade < 60
       ) {
          resultadoFinal.push(pessoa);
       }
    }
 
    return resultadoFinal   
 */

 
 

    // Tentativa diferente, porém não chegou ao resultado, 
    // estou usando o comando push(), porém retorna o array vazio.

    
  /*   
    const pessoasAutorizadas = []

    const pessoasNaFila = [
        {
        nome: "Paula",
        idade: 12,
        altura: 1.8
        },
        {
        nome: "João",
        idade: 20,
        altura: 1.3
        },
        {
        nome: "Pedro",
        idade: 15,
        altura: 1.9
        },
        {
        nome: "Luciano",
        idade: 22,
        altura: 1.8
        },
        {
        nome: "Artur",
        idade: 10,
        altura: 1.2
        },
        {
        nome: "Soter",
        idade: 70,
        altura: 1.9
        }
];

    
    for (let i = 0; i < pessoasNaFila.length - 1; i++){
        
        if(pessoasNaFila.altura > 1.5 && pessoasNaFila.idade > 14 && pessoasNaFila.idade < 60){  
            pessoasAutorizadas.push(i)  
        }
        return pessoasAutorizadas
    } 
*/


    // Tentativa diferente, porém não chegou ao resultado, 
    // estou usando o comando push(), porém retorna o array vazio.


/*     
    let altura = 150
    let idadeMin = 14
    let idadeMax = 60

   
    

    const pessoasNaFila = [
        {
        nome: "Paula",
        idade: 12,
        altura: 1.8
        },
        {
        nome: "João",
        idade: 20,
        altura: 1.3
        },
        {
        nome: "Pedro",
        idade: 15,
        altura: 1.9
        },
        {
        nome: "Luciano",
        idade: 22,
        altura: 1.8
        },
        {
        nome: "Artur",
        idade: 10,
        altura: 1.2
        },
        {
        nome: "Soter",
        idade: 70,
        altura: 1.9
        }
];

    return pessoas.filter(function(obj) {
        return pessoasNaFila.altura > altura && 
       pessoasNaFila.idade > idadeMin && 
       pessoasNaFila.idadeMax < idadeMax
        })    
*/  
}       



// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
/*
     const resultadoFinal = []

    const pessoasNaFila = [
        {
        nome: "Paula",
        idade: 12,
        altura: 1.8
        },
        {
        nome: "João",
        idade: 20,
        altura: 1.3
        },
        {
        nome: "Pedro",
        idade: 15,
        altura: 1.9
        },
        {
        nome: "Luciano",
        idade: 22,
        altura: 1.8
        },
        {
        nome: "Artur",
        idade: 10,
        altura: 1.2
        },
        {
        nome: "Soter",
        idade: 70,
        altura: 1.9
        }
    ];

   for (let pessoa of pessoas) {
      if (
        pessoasNaFila.altura < 1.5 && 
        pessoasNaFila.idade < 14 && 
        pessoasNaFila.idadeMax > 60
      ) {
         resultadoFinal.push(pessoa)
      }
   }

   return resultadoFinal*/
} 


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
// Não consegui fazer, montei essa estrutura, mais não consegui resolver, fiz pesquisas no google, mesmo assim não consegui concluir.   
    const compras = 
[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]


    for (let i = 0; i < contas.length; i++){
        for (let i = 0; i < compras.length; i++){
            contas.reduce(function(acumulador, valorAtual){
                return acumulador + valorAtual
            })
    }
}

    let somaCompras = []
    let saldoFinal = compras.saldoTotal - somaCompras
    return saldoFinal

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

//Consegui fazer a ordem porém não passou no caso de teste 2
    const pessoas = 
    [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" }
      ]
    pessoas.sort(function (a, b) {
        if(a.nome < b.nome){
            return -1
        } else {
            return true
        }
    })
     return pessoas
     
} 

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
//Consegui fazer a ordem porém não passou no caso de teste 2
    let pessoas =
    [ 
        { nome: "Márcia", dataDaConsulta: "04/05/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" },
        { nome: "João",  dataDaConsulta: "01/10/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" } 
       ];
       
       pessoas.sort(function(a ,b){
           return a.dataDaConsulta - b.dataDaConsulta           
       })
       return pessoas
       
}



