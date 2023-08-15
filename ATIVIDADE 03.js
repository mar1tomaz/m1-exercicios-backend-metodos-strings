const texto = "Aprenda programar do zero na Cubos Academy";
function textoAmigavel(texto) {
    const part = texto.replaceAll(" ", "-");
    console.log(part);
}
textoAmigavel(texto);
