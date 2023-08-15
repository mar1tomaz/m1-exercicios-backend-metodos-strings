const cpf = "011.022.033-44";
const cpfFormatado = (cpf) => {
    const cpfLimpo = cpf.replaceAll(".", "").replaceAll("-", "");
    console.log(cpfLimpo);
}
cpfFormatado(cpf);