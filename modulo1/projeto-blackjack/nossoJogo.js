/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    const carta = comprarCarta();

    let primeiraCartaUsuario = comprarCarta();
    let segundaCartaUsuario = comprarCarta();
    let primeiraCartaComputador = comprarCarta();
    let segundaCartaComputador = comprarCarta();


    
    if(confirm("Boas vindas ao jogo de Blackjack")){
       console.log("Boas vindas ao jogo de Blackjack");
    
     if(confirm("Quer iniciar uma nova rodada?")){
      
         const pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
         const pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;
         
         console.log(`Usuário - cartas ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${pontuacaoUsuario}`);
         
         console.log(`Computador - cartas ${primeiraCartaUsuario.texto} ${segundaCartaComputador.texto} - pontuação ${pontuacaoComputador}`); 

         if(pontuacaoUsuario === pontuacaoComputador){
            console.log("Empate!");
         } if(pontuacaoUsuario > pontuacaoComputador){
            console.log("O usuário ganhou!");
         } if(pontuacaoUsuario < pontuacaoComputador){
            console.log("O cpmputador ganhou!");
         }
      }else {
        console.log("O jogo acabou");
     }
   }  



  
