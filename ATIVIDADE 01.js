const comentario = "Esse COVID é muito perigoso!";
const comentarioUpperCase = comentario.toUpperCase(); // Converter para minúsculas para evitar problemas de case sensitivity

if (
    comentarioUpperCase.includes("PANDEMIA") ||
    comentarioUpperCase.includes("COVID")
) {
    console.log(`Comentário bloqueado por conter palavras proibidas`);
} else {
    console.log(`Comentário autorizado`);
}