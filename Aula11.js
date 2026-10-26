// Aula 11

// Condição simples
const v = 62.5
console.log(`A velocidade do seu carro é ${v} km/h`)
if(v > 60){
    console.log("Você ultrapassou a velocidade permitida. Você foi multado!")
}
console.log("Dirija sempre usando cinto de segurança!")

// Condição composta
const pais = 'Brasil'
console.log(`Vivendo no ${pais}`)
if(pais === 'Brasil') {
    console.log('Você é Brasileira!')
} else{
    console.log("Você é Estrangeira!")
}

// Exercício 01
let idade = 20
if(idade >= 18){
    console.log("É maior de idade!")
}
idade = 16
if(idade >= 18){
    console.log("Você é maior de idade!")
}

// Exercício 02
let idade2 = 16
if(idade2 >= 18){
    console.log("Maior de idade!")
} else{
    console.log("Menor de idade!")
}
idade2 = 18
if (idade2 >= 18){
    console.log("Superior a 18 anos. Você é maior de idade")
} else{
    console.log("Inferior a 18 anos. Você é menor de idade")
}

// Exercício 03
let exe03 = 19
if (exe03 >= 18){
    console.log("Você é adulto.")
} else if (exe03 >= 12){
    console.log("Você é adolescente.")
} else {
    console.log("Você é criança.")
}
exe03 = 11
if (exe03 >= 18){
    console.log("Você é adulto.")
} else if (exe03 >= 12){
    console.log("Você é adolescente.")
} else {
    console.log("Você é criança.")
}
exe03 = 12
if (exe03 >= 18){
    console.log("Você é adulto.")
} else if (exe03 >= 12){
    console.log("Você é adolescente.")
} else {
    console.log("Você é criança.")
}
exe03 = 17
if (exe03 >= 18){
    console.log("Você é adulto.")
} else if (exe03 >= 12){
    console.log("Você é adolescente.")
} else {
    console.log("Você é criança.")
}
exe03 = 18
if (exe03 >= 18){
    console.log("Você é adulto.")
} else if (exe03 >= 12){
    console.log("Você é adolescente.")
} else {
    console.log("Você é criança.")
}

// Exercício 04 testado no exercício 02

// Exercício 05
let idade3 = 20
let temCNH = true
if (idade3 >= 18 && temCNH === true){
    console.log("Você está apto a dirigir.")
} else {
    console.log("Você não tem idade o suficiente e/ou não possui habilitação.")
}
idade3 = 17
if (idade3 >= 18 && temCNH === true){
    console.log("Você está apto a dirigir.")
} else {
    console.log("Você não tem idade o suficiente e/ou não possui habilitação.")
}
temCNH = false
if (idade3 >= 18 && temCNH === true){
    console.log("Você está apto a dirigir.")
} else {
    console.log("Você não tem idade o suficiente e/ou não possui habilitação.")
}
idade3 = 20
if(idade3 >= 18 && temCNH === true){
    console.log("Você está apto a dirigir.")
} else {
    console.log("Você não tem idade o suficiente e/ou não possui habilitação.")
}

// Exercício 06
let exe06 = 28
if(exe06 % 2 === 0){
    console.log("O número é par.")
} else{
    console.log("O número é ímpar.")
}
exe06 = 27
if(exe06 % 2 === 0){
    console.log("O número é par.")
} else{
    console.log("O número é ímpar.")
}