let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
const seisDígitosIdentificador = (identificador) => {
    identificador = identificador.trim();
    identificador = identificador.padStart(6, `0`);
    console.log(identificador);
}
const nomeMinúscula = (nome) => {
    nome = nome.toLowerCase();
    console.log(nome);
}
const espacoEmail = (email) => {
    email = email.trim();
    console.log(email);
}

seisDígitosIdentificador(identificador);
nomeMinúscula(nome);
espacoEmail(email);