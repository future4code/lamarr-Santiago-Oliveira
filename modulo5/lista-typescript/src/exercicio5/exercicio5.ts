type Usuarios = {
  name: string;
  email: string;
  role: string;
};

const usuarios: Usuarios[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const mostraListaEmailsUsuarios = (usuarios: Usuarios[]): string[] => {
  const emailUsuario: string[] = usuarios
    .filter((usuario) => {
      return usuario.role === "admin";
    })
    .map((usuario) => {
      return usuario.email;
    });
  return emailUsuario;
};

console.table(mostraListaEmailsUsuarios(usuarios));
