// Aula 20

// Exerício 01
function dobro(n){
    return n * 2
}
console.log(`Dobro 1 - ${dobro(5)}`)

const dobro2 = (n) => {
    return n * 2
}
console.log(`Dobro 2 - ${dobro2(3)}`)

// Exercício 02
const dobro3 = n => n * 2

console.log(`Dobro 3 - ${dobro3(5)}`)

// Exercício 03
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
    {idade: 18, esperado: "Voto obrigatório."},
    {idade: 19, esperado: "Voto obrigatório."},
    {idade: 68, esperado: "Voto obrigatório."},
    {idade: 69, esperado: "Voto obrigatório."},
    {idade: 70, esperado: "Voto facultativo."},
    {idade: 71, esperado: "Voto facultativo."},
    {idade: 100, esperado: "Voto facultativo." }
]

for(const caso of casos){
    const { idade, esperado } = caso

    if (classificar(idade) === esperado) {
        console.log(`OK     | ${idade}`)
    } else {
        console.log(`FALHOU | ${idade} - saiu: ${classificar(idade)} / esperado: ${esperado}`)
    }
}

// Exercício 04 - só leitura
// test("meu teste", async ({ page }) => { ... })
//
// 1. O test é uma função sendo chamada, e recebe dois argumentos:
//    o nome do teste e a arrow function, que começa no async e vai
//    até o último }. A arrow é o segundo argumento - eu entrego a
//    função pronta para o test guardar e rodar depois.
//
// 2. O { page } é desestruturação: desmonta o pacote que o Playwright
//    entrega e tira dali um campo só, o page, que é a página do
//    navegador. Por isso a linha de dentro escreve page.goto(...).
