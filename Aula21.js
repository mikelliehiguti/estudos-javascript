// Aula 21

const classificar = (idade) =>{
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

const casos = [
    {idade: 15, esperado: "Não pode votar."},
    {idade: 16, esperado: "Voto facultativo."},
    {idade: 17, esperado: "Voto facultativo."},
    {idade: 18, esperado: "Voto obrigatório"},
    {idade: 19, esperado: "Voto obrigatório."},
    {idade: 68, esperado: "Voto obrigatório."},
    {idade: 69, esperado: "Voto obrigatório."},
    {idade: 70, esperado: "Voto facultativo."},
    {idade: 71, esperado: "Voto facultativo."},
    {idade: 100, esperado: "Voto facultativo." }
]

// Exercício 01
const esperados = casos.map(caso => caso.esperado)
console.log(esperados)

// Exercício 02
const adultos = casos.filter(caso => caso.idade >= 18)
console.log(adultos.length)
console.log(adultos)

const adultos2 = casos.filter(caso => caso.idade > 18)
console.log(adultos2.length)
console.log(adultos2)

// Com >= saem 7 casos (o 18 entra). Com > saem 6 (o 18 fica de fora).
// Erro de borda: uma letra muda o resultado só no valor do limite.

// Exercício 03
const caso70 = casos.find(caso => caso.idade === 70)
console.log(caso70)

const caso33 = casos.find(caso => caso.idade === 33)
console.log(caso33)

//console.log(caso33.idade)

// O find devolve UM item, o primeiro que bate com a regra - não uma lista.
// Se não achar nada, devolve undefined (e não uma lista vazia, como o filter).
//
// Por isso pedir um campo do resultado do find é perigoso:
// console.log(caso33.idade) quebra com
// TypeError: Cannot read properties of undefined (reading 'idade')
//
// Traduzindo: pedi o campo idade de uma coisa que não existe.
// A causa não está nessa linha e sim na busca acima, que não achou nada.

// Exercício 04
const falhas = casos.filter(caso => classificar(caso.idade) !== caso.esperado)
console.log(`${casos.length - falhas.length} passaram, ${falhas.length} falharam`)
console.log(falhas)

// O esperado do caso de 18 anos está sem o ponto final DE PROPÓSITO.
// É a sabotagem do exercício 4: serve para provar que o teste reprova
// quando a saída não bate com o esperado. Sem ela, os dez passam.
