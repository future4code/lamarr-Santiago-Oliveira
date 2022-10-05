const clientes = [
    {
        id: 1,
        nome: "Fulano "
    },
    {
        id: 2,
        nome: "Ciclano"
    },
    {
        id: 3,
        nome: "Beltrano"
    },
    {
        id: 4,
        nome: "Fulana"
    }
]

const cadastraCliente = (id, nome) => {
    const novoCliente = {}
    if (clientes.id === id) {
        return "Id já existe"
    } else {
        return clientes.push(novoCliente)
    }
}

console.log(cadastraCliente({ id: 5, nome: "Ciclana" }))

