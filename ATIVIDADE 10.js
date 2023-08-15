const nomeArquivo = 'Foto da Familia.pdf';
const verificacaoArquivo = (nomeArquivo) => {
    if (nomeArquivo.includes("png") || nomeArquivo.includes("jpg") || nomeArquivo.includes("gif") || nomeArquivo.includes("jpeg")) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}
verificacaoArquivo(nomeArquivo);