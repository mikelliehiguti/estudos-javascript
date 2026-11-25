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
