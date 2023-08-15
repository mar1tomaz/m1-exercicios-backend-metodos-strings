const cpf = "12345678900";
const cnpj = "12345678900";
function formatarcpf(cpf) {
    if (cpf.length === 11) {
        const cpfFormatado = cpf.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        console.log(cpfFormatado);
    } else {
        console.log("CPF Inválido");
    }
}
formatarcpf(cpf);
function formatarcnpj(cnpj) {
    if (cnpj.length === 14) {
        const cnpjFormatado = cnpj.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        //12.345.678/0001-99
        console.log(cnpjFormatado);
    } else {
        console.log("CNPJ Inválido");
    }
}
formatarcnpj(cnpj);

