const nome = 'Guido Cerqueira';

const nick = (nome) => {
    let nickPadronizado = nome.slice(0, 12);
    nickPadronizado = `@${nickPadronizado}`;
    nickPadronizado = nickPadronizado.replaceAll(" ", "");
    nickPadronizado = nickPadronizado.toLowerCase();
    console.log(nickPadronizado);
}
nick(nome);