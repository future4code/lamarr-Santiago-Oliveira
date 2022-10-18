const novaTarefa = process.argv[2]

const tarefas = [
    "Levar o pet para passear"
]

const addTarefa = () => {
    /*   const tarefasAtualizadas = [...tarefas] */
    tarefas.push(novaTarefa)

    return tarefas
}

const novaLista = addTarefa()

console.log(novaLista);