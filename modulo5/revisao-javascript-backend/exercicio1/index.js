const validaRetornoF = (grau, escala) => {
    if (typeof grau === "string") {
        throw " Erro. Parâmetro inválido ('grau')."
    } if (typeof escala !== "F") {
        throw "Erro. Parâmetro inválido ('escala')."
    } if (typeof escala === "f") {
        throw "Erro. Parâmetro inválido ('escala)."
    }
}

const validaRetornoK = (grau, escala) => {
    if (typeof grau === "string") {
        throw " Erro. Parâmetro inválido ('grau')."
    } if (typeof escala !== "K") {
        throw "Erro. Parâmetro inválido ('escala')."
    } if (typeof escala === "k") {
        throw "Erro. Parâmetro inválido ('escala)."
    }
}


const converteTemperatura = (grau, escala, callback) => {

    if (escala === "F") {

        callback()
        return grauConvertidoF = (grau * 9 / 5) + 32
    } else if (escala === "K") {

        callback()
        return grauConvertidoK = grau + 273.15
    }

}



/* const converteTemperatura = (grau, escala, callback) => {

    if (typeof grau === "string") {
        throw " Erro. Parâmetro inválido ('grau')."
    } if (typeof escala !== "F" || typeof escala !== "K") {
        throw "Erro. Parâmetro inválido ('escala')."
    } if (typeof escala === "f" || typeof escala === "k") {
        throw "Erro. Parâmetro inválido ('escala)."

    } else if (escala === "F") {

        return grauConvertidoF = (grau * 9 / 5) + 32

    } else if (escala === "K") {

        return grauConvertidoK = grau + 273.15

    }

}
 */

console.log(converteTemperatura(30, "F", validaRetornoF));
