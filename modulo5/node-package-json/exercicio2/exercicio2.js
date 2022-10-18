const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

const operacoes = () => {

    switch (operacao) {
        case "soma":
            return numero1 + numero2
        case "subtracao":
            return numero1 - numero2
        case "multiplicacao":
            return numero1 * numero2
        case "divisao":
            return numero1 / numero2
    }
    return operacao
}

const resultado = operacoes()
console.log(resultado)

