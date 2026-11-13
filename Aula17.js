// Aula 17

// Exercício 01
const caso = { idade: 18, esperado: "Voto obrigatório." }
console.log(caso.idade)
console.log(caso.esperado)

// Exercício 02
console.log(caso)
caso.idade = 70
console.log(caso)
caso.observacao = "caso de borda"
console.log(caso)

// Exercício 03
console.log(caso.nome)
console.log(caso.esperdo) // Escrito incorretamente de propósito para verificar o retorno

// Exercício 04
const casos = [
    {idade: 15, esperado: "Não pode votar."},
    {idade: 16, esperado: "Voto facultativo."},
    {idade: 17, esperado: "Voto facultativo."},
    {idade: 18, esperado: "Voto obrigatório."},
    {idade: 19, esperado: "Voto obrigatório."},
    {idade: 68, esperado: "Voto obrigatório."},
    {idade: 69, esperado: "Voto obrigatório."},
    {idade: 70, esperado: "Voto facultativo."},
    {idade: 71, esperado: "Voto facultativo."},
    { idade: 100, esperado: "Voto facultativo." }
]

console.log(casos.length)
console.log(casos[0])
console.log(casos[0].idade)

// Exercício 05
function classificar(idade){
    if (idade < 16){
        return "Não pode votar."
    } else if (idade < 18){
        return "Voto facultativo."
    } else if (idade < 70){
        return "Voto obrigatório."
    } else{
        return "Voto facultativo."
    }
}

for(let i = 0; i < casos.length; i++){
    const idade = casos[i].idade
    const esperado = casos[i].esperado

    if (classificar(idade) === esperado) {
        console.log(`OK     | ${idade}`)
    } else {
        console.log(`FALHOU | ${idade} - saiu: ${classificar(idade)} / esperado: ${esperado}`)
    }
}