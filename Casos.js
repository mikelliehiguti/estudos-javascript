// Casos

// Exercício 03
const casos = [
    { idade: 15, esperado: "Não pode votar." },
    { idade: 16, esperado: "Voto facultativo." },
    { idade: 17, esperado: "Voto facultativo." },
    { idade: 18, esperado: "Voto obrigatório." },
    { idade: 19, esperado: "Voto obrigatório." },
    { idade: 69, esperado: "Voto obrigatório." },
    { idade: 70, esperado: "Voto facultativo." },
    { idade: 71, esperado: "Voto facultativo." },
]

module.exports = { casos }