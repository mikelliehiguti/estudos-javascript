// Aula 12

// Condições aninhadas
let idade = 69                                  // Versão em quatro faixas
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log("Não pode votar.")
} else if (idade < 18) {
    console.log("Voto facultativo.")
} else if (idade < 70) {
    console.log("Voto obrigatório.")
} else {
    console.log("Voto facultativo.")
}

// Versão do professor
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log("Não pode votar.")
} else if (idade < 18 || idade >= 70) {
    console.log("Voto facultativo.")
} else {
    console.log("Voto obrigatório.")
}

const now = new Date()
const hora = now.getHours()
const minutos = now.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos} horas`)
if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// Condição múltipla
const agora = new Date()
const diaSemana = agora.getDay()
let nomeDiaSemana
switch (diaSemana) {
    case 0:
        nomeDiaSemana = "Domingo"
        break
    case 1:
        nomeDiaSemana = "Segunda-feira"
        break
    case 2:
        nomeDiaSemana = "Terça-feira"
        break
    case 3:
        nomeDiaSemana = "Quarta-feira"
        break
    case 4:
        nomeDiaSemana = "Quinta-feira"
        break
    case 5:
        nomeDiaSemana = "Sexta-feira"
        break
    case 6:
        nomeDiaSemana = "Sábado"
        break
    default:
        nomeDiaSemana = "Dia inválido"
        break
}
console.log(`Hoje é ${nomeDiaSemana}`)

// Exercício 01
let dia = 3
switch (dia) {
    case 1:
        dia = "Domingo"
        break
    case 2:
        dia = "Segunda-feira"
        break
    case 3:
        dia = "Terça-feira"
        break
    case 4:
        dia = "Quarta-feira"
        break
    case 5:
        dia = "Quinta-feira"
        break
    case 6:
        dia = "Sexta-feira"
        break
    case 7:
        dia = "Sábado"
        break
    default:
        dia = "Dia inválido"
}
console.log(`O dia 3 é ${dia}`)
dia = 1
switch (dia) {
    case 1:
        dia = "Domingo"
        break
    case 2:
        dia = "Segunda-feira"
        break
    case 3:
        dia = "Terça-feira"
        break
    case 4:
        dia = "Quarta-feira"
        break
    case 5:
        dia = "Quinta-feira"
        break
    case 6:
        dia = "Sexta-feira"
        break
    case 7:
        dia = "Sábado"
        break
    default:
        dia = "Dia inválido"
}
console.log(`O dia 1 é ${dia}`)

dia = 7
switch (dia) {
    case 1:
        dia = "Domingo"
        break
    case 2:
        dia = "Segunda-feira"
        break
    case 3:
        dia = "Terça-feira"
        break
    case 4:
        dia = "Quarta-feira"
        break
    case 5:
        dia = "Quinta-feira"
        break
    case 6:
        dia = "Sexta-feira"
        break
    case 7:
        dia = "Sábado"
        break
    default:
        dia = "Dia inválido"
}
console.log(`O dia 7 é ${dia}`)

// Exercício 02
dia = 3
switch (dia) {
    case 1:
        dia = "Domingo"
        break
    case 2:
        dia = "Segunda-feira"
        break
    case 3:
        dia = "Terça-feira"
        //break
    case 4:
        dia = "Quarta-feira"
        break
    case 5:
        dia = "Quinta-feira"
        break
    case 6:
        dia = "Sexta-feira"
        break
    case 7:
        dia = "Sábado"
        break
    default:
        dia = "Dia inválido"
}
console.log(`O dia 3 é ${dia}`) // Retornou quarta-feira pois não havia um break para o case 3, então, ele foi para o próximo da lista até achar o break

// Exercício 03
dia = 9
switch (dia) {
    case 1:
        dia = "Domingo"
        break
    case 2:
        dia = "Segunda-feira"
        break
    case 3:
        dia = "Terça-feira"
        //break
    case 4:
        dia = "Quarta-feira"
        break
    case 5:
        dia = "Quinta-feira"
        break
    case 6:
        dia = "Sexta-feira"
        break
    case 7:
        dia = "Sábado"
        break
   // default:
   //     dia = "Dia inválido"
}
console.log(`O dia 9 é ${dia}`)

/* O default é o equivalente ao else: pega tudo que nenhum case pegou.
Sem ele, nada é atribuído e o programa segue sem avisar — saiu "O dia 9 é 9",
 porque a variável continuou com o número que já tinha. */

 // Exercício 04
 idade = 17
 let temCNH = false
 if (idade >= 18){
    if(temCNH === true){
        console.log("Você está apto a dirigir")
    } else {
        console.log("Tem idade, mas não possui habilitação")
    }
 } else{
    console.log("Não tem idade para dirigir")
 }

/* O && dá 2 saídas e não sabe qual condição falhou - por isso a mensagem
 da aula 11 precisou dizer "e/ou". O aninhado dá 3 saídas e consegue
 dizer o que falta. Mais curto x mais informativo.
 As duas idades 17 caem na mesma mensagem porque o if de fora reprova
 antes, e o de dentro nem é consultado. */

// Exercício 05
let nota = 8
if (nota >= 7){
    console.log("Aprovado")
} else if(nota >= 5){
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}