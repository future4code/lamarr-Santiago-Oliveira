const converteTemperatura = (grau, escala) => {

    if (typeof grau === "string") {
        throw " Erro. Parâmetro inválido ('grau')."
    } if (escala !== "F" && escala !== "K") {
        throw "Erro. Parâmetro inválido ('escala')."
    } if (escala === "f" || escala === "k") {
        throw "Erro. Parâmetro inválido ('escala)."
    }

    if (escala === "F") {

        return grauConvertidoF = (grau * 9 / 5) + 32

    } else if (escala === "K") {

        return grauConvertidoK = grau + 273.15

    }

}


console.log(converteTemperatura(30, "F"));
console.log(converteTemperatura(30, "K"));
