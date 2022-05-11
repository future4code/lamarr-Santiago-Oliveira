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
    let novoArray = []

    
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

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}