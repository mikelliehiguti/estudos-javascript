// Votação

// Exercício 01
function classificar(idade){
    if (idade < 16){
        return "Não pode votar."
    } else if (idade < 18){
        return "Voto facultativo."
    } else if (idade < 70){
        return "Voto obrigatório."
    } else {
        return "Voto facultativo."
    }
}

module.exports = {classificar}
