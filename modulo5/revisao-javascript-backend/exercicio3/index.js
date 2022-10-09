const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123"
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha"
    }
]

const login = (email, senha) => {
    return contas.push({ email, senha })
}

console.log(login("labenu@gmail.com", "L1234u@"));
console.log(contas);