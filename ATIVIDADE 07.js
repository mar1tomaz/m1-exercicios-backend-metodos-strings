const email = "aluno@cubos.academy";
const verificacao = (email) => {
    if (email.includes("@") !== -1 && email.includes(".") !== -1 && email.lastIndexOf(".") !== 1 && email.indexOf(".") !== 1) {
        console.log(`E-mail válido`);
    } else {
        console.log(`E-mail inválido`);
    }
}
verificacao(email);