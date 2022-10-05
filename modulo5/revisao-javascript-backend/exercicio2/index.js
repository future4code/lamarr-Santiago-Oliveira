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
    let novoCliente = { id, nome }

    if (clientes.id === id) {
        throw "Erro. Parâmetro inválido ('id já existe')."
    } if (typeof clientes.id === "string") {
        throw "Erro. Parâmetro inválido ('id')."
    }/*  if (typeof clientes.nome !== "string") {
        throw "Erro. Parâmetro inválido ('nome')."
    } */


    else {
        return clientes.push(novoCliente)
    }
}

console.log(cadastraCliente(5, "ciclana"))
console.log(cadastraCliente(5, "ciclana"))
console.log(clientes);
