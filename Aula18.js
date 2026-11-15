// Aula 18

// Exercício 01
const caso = {idade: 18, esperado: "Voto é obrigatório"}
const {idade, esperado} = caso
console.log(`Com ${idade} anos o ${esperado}`)

// Exercício 02
const {esperado: mensagem} = caso
console.log(mensagem)

// Exercício 03
// Chave que não existe: não dá erro, vira variável com undefined.
// Mesma armadilha de nome digitado errado - o problema só aparece longe daqui.
const {nome} = caso
console.log(nome)

// Exercício 04
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

for(let i = 0; i < casos.length; i++){
    const { idade, esperado } = casos[i]

    if (classificar(idade) === esperado) {
        console.log(`OK     | ${idade}`)
    } else {
        console.log(`FALHOU | ${idade} - saiu: ${classificar(idade)} / esperado: ${esperado}`)
    }
}

// Exercício 05
//const { test, expect } = require("@playwright/test")
//
//test("meu teste", async ({ page }) => {
//    await page.goto("https://exemplo.com")
//})

// As variáveis criadas foram "test" e "expect"
// O {page} está desmontado