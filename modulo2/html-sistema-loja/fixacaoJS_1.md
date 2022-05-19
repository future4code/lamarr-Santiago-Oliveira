```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 
    valorTotalVendas = valorTotalVendas * 0.05
    let salarioFixo = 2000
    let bonus = 100 * qtdeCarrosVendidos
 
    salarioFinalDoMes = valorTotalVendas + salarioFixo + bonus
 
  
  
    return salarioFinalDoMes
}

calculaSalario(3,130000)
```