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

//Nessa tentativa faz a unificação das duas listas, 
//porém no filter para remover repetidos só retorna Banana

const setListaUnica = new Set()

const geraItensUnicos = (primeiraLista, segundaLista) => {

    return listaUnicaDeObjetos = primeiraLista.concat(segundaLista)

}

let listaUnica = geraItensUnicos(primeiraLista, segundaLista)
console.log("Lista unica de objetos:", listaUnica);

const listaSemRepetir = listaUnica.filter((item) => {
    const repetidos = setListaUnica.has(listaUnica.id)
    setListaUnica.add(listaUnica.id)
    return !repetidos
})

console.log(listaSemRepetir);

//---------------------------------------------------------------------------
//1 tentativa - só faz a unificação das listas

/* const geraItensUnicos = (primeiraLista, segundaLista) => {

    return listaUnica = primeiraLista.concat(segundaLista)

}

const listaNova = geraItensUnicos(primeiraLista, segundaLista);
console.log("Lista nova", listaNova);

const listaSemRepetir = listaNova.filter((item, i) => {
    return listaUnica.indexOf(item) === i
})


console.log("Lista sem repetir", listaSemRepetir); */



//-----------------------------------------------------------------
//Unificação dos dois objetos.
/*  const geraItensUnicos = (primeiraLista, segundaLista) => {
    
    return listaUnica = primeiraLista.concat(segundaLista)
    
}

console.log(geraItensUnicos(primeiraLista, segundaLista)); */
