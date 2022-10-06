const primeiraLista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    }
]

const segundaLista = [
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    }
]

const geraItensUnicos = (primeiraLista, segundaLista) => {

    return primeiraLista.nome + segundaLista.nome

}


console.log(geraItensUnicos(primeiraLista, segundaLista));