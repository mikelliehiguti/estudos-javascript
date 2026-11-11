// Aula 16

// Funções são ações executadas assim que são chamadas ou em decorrência de algum evento
// Nem toda função tem parâmetro/retorno

function parimp(n){         // Parâmetro -> parimp(n)
    if(n%2 === 0){          // Ação
        return 'par'        // Retorno
    } else {
        return 'ímpar'
    }
}
let numero = 12
let res = parimp(numero)    // Chamada
console.log(`O número ${numero} é ${res}`)


function soma(n1, n2){
    return n1 + n2
}
let n1 = 2
let n2 = 5
let res2 = soma(n1, n2)
console.log(`A soma de n1 + n2 é igual a ${res2}`)

/* Em casos que uma variável não recebe um valor, no momento da soma, daria NaN, para isso,
pode -se declarar que caso a variável não receba um valor, ela assuma como 0 */

function soma2(n3, n4){
    return n3 + n4

}
console.log(`A soma de n3 + n4 é igual a ${soma(7)}`) // Ocasionado propositalmente

// Correção aplicada ↓ | Parâmetros opcionais

function soma3(n5 = 0, n6 = 0){
    return n5 + n6
}
console.log(`A soma de n5 + n6 é igual a ${soma3(87)}`)

// A variável também pode receber uma função
let v = function(x){
    return x * 5
}
console.log(v(29))

// Fatorial
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c --){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

// Exercício 01
function dobro(exe01){
    return exe01 * 2
}
let exe01 = 29
let resultado = dobro(exe01)
console.log(`O dobro de ${exe01} é ${resultado}`)

// Exercício 02
function dobro2(exe02){
//    return exe02 * 2
}
let exe02 = 29
let resultado2 = dobro2(exe02)
console.log(`O dobro de ${exe02} é ${resultado2}`)

/* Sem o return a função não entrega nada, e quem chamou recebe undefined.
Aqui o cálculo estava dentro do próprio return, então comentar a linha
tirou as duas coisas de uma vez: o cálculo e a entrega.
Dá para separar em duas linhas (calcular numa, entregar na outra). Aí,
sem o return, o cálculo até acontece, mas o valor se perde dentro da função.
É o mesmo undefined da gaveta que não existe, da aula 15: nos dois casos
pedi algo e não veio nada de volta. */

// Exercício 03
function mostraDobro(n){
    console.log(n * 2)
}
console.log(mostraDobro(5) + 10)

function devolveDobro(n){
    return n * 2
}
console.log(devolveDobro(5) + 10)

/* A mostraDobro só escreve na tela: calcula, mostra o 10 e não entrega nada.
Então mostraDobro(5) vale undefined, e undefined + 10 vira NaN
(Not a Number, "não é um número").
A devolveDobro entrega o valor com return, então devolveDobro(5) vale 10
e 10 + 10 dá 20.
Só dá para usar em conta o resultado de uma função que tem return. */

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

const idadesVoto = [15, 16, 17, 18, 19, 68, 69, 70, 71]
for(let i = 0; i < idadesVoto.length; i++){
    const idade = idadesVoto[i]
console.log(`${idade} - ${classificar(idade)}`)
}

// Exercício 05
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

const idadesVoto2 = [15, 16, 17, 18, 19, 68, 69, 70, 71]
const esperados = [
    "Não pode votar.",
    "Voto facultativo.",
    "Voto facultativo.",
    "Voto obrigatório.",
    "Voto obrigatório.",
    "Voto obrigatório.",
    "Voto obrigatório.",
    "Voto facultativo.",
    "Voto facultativo."
]
for(let i = 0; i < idadesVoto2.length; i++){
    const idade = idadesVoto2[i]
if (classificar(idade) === esperados[i]) {
    console.log(`OK     | ${idade}`)
} else {
    console.log(`FALHOU | ${idade} - saiu: ${classificar(idade)} / esperado: ${esperados[i]}`)
}}

// Teste de regressão: compara o que a função devolve com o resultado esperado,
// caso a caso. Pegou um erro de digitação em "obrigatório" nas idades 18, 19, 68 e 69
// que passaria despercebido numa conferência visual.