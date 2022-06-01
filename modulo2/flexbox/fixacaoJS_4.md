```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
let contador = 0
let mensagem

for (let i = 0; i < arrayDeNumeros.length; i++){
	if(arrayDeNumeros[i] === numeroEscolhido){
	    contador++
	}
}
if (contador > 1){
   mensagem = `O número ${numeroEscolhido} aparece ${contador}x`
}else if (numeroEscolhido === 3){
	   mensagem = `Número não encontrado`
} else {
  mensagem = `Número não encontrado`
}
 return mensagem
}
```