const celular = '7199918888';

const formatarCelular = (celular) => {
    if (celular.length === 10) {
        const celularFormatado = celular.replace(/(\d{2})(\d{4})(\d{4})/, '($1) 9 $2-$3');
        console.log(celularFormatado);
    } else {
        console.log('Número de telefone inválido. Certifique-se de que o número possui 11 dígitos com o DDD.');
    }
};

formatarCelular(celular);