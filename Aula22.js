// Aula 22

// Exercício 01
console.log("Exercício 01 | um")
setTimeout(() => console.log("Exercício 01 | dois"), 1000)
console.log("Exercício 01 | três")

// Meu palpite: achei que sairia um, dois e três na ordem,
// já que não tem async nem await.
//
// Saiu: um, três, dois.
//
// O setTimeout não para o programa. Ele dispara o pedido e a execução segue
// para a linha de baixo na mesma hora. O "dois" só volta um segundo depois,
// quando o resto já tinha terminado.
//
// Ou seja, é o contrário do que eu pensei: é SEM async e await que a ordem
// se perde. Os dois existem justamente para fazer o código esperar.
//
// Num teste isso aparece assim: clicar no botão de login e já preencher a senha,
// sem esperar a tela trocar. O campo ainda não existe na hora em que o teste
// tenta usar - e o erro aponta para a senha, que não tem culpa nenhuma.

// Exercício 02
function demora(){
    return new Promise(resolve => setTimeout(() => resolve("pronto"), 1000))
}

console.log("Exercício 02", demora())

// Exercício 03
async function principal(){
    const r = await demora()
    console.log("Exercício 03 |", r)
}
principal()

// Exercício 04
async function principal2(){
    const r = demora()
    console.log("Exercício 04 |", r)
}
principal2()

// Saiu: Promise { <pending> }  -  e NÃO deu erro nenhum.
//
// Sem o await, o lado direito não espera. O demora() devolve o comprovante
// vazio na hora, e o = guarda o comprovante dentro do r, em vez do "pronto".
//
// Dá para ver na ordem do terminal: o 04 saiu antes do "Exercício 01 | dois",
// porque não esperou. O 03, que tem await, saiu por último.
//
// Em Playwright esse é o defeito número um. Sem o await, o teste não para
// para esperar a tela e segue clicando no que ainda não existe. Quando
// quebra, quebra num lugar que não tem culpa. E às vezes nem quebra:
// passa verde comparando um comprovante vazio com outro.