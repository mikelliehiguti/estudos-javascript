//Aula 06
const nome = 'Mikellie'
console.log(`É um prazer te conhecer, ${nome}!`)


//window.prompt → Quando o usuário insere o valor, o JS entende como string, por esse motivo, quando usado o '+', a informação é concatenada
const n1 = Number.parseInt("27")
const n2 = Number.parseFloat("9.5")
const s = n1 + n2
console.log(`A soma de ${n1} e ${n2} é ${s}`)

// Nas versões mais atuais do JS, tem o modo simplificado "Number(n)", que o JS faz a distinção de qual tipo se trata
const n3 = Number("74")
const n4 = Number("1028.89")
const s1 = n3 + n4
console.log(`A soma de ${n3} + ${n4} é igual a ${s1}`)

console.log(Number("27 anos")) // NaN -- visto que possui caracteres além dos números
console.log(parseInt("27 anos"))

// Formatando string
console.log(`Seu nome tem ${nome.length} letras`) // length → quantidade de caracteres
console.log(`Bem vinda ${nome.toUpperCase()}`)
console.log(`Olá ${nome.toLowerCase()}. 
    Ops... Desculpe, o correto seria → Olá ${nome} :).`)

// Formatando números
console.log(n2.toFixed(2)) // casas decimais
console.log(n2.toFixed(2).replace('.', ',')) // casas decimais + separador numérico


//Exercício 01
const exe01 = "27"
console.log("Exercício 01 - valor:", exe01, "| tipo:", typeof exe01)

// Exercício 02
const exe02 = Number(exe01)
console.log("Exercício 02 - valor:", exe02, "| tipo:", typeof exe02)

// Exercício 03
const s3 = "10" + 5
console.log(s3) // valor fica como 105 por conta que está concatenando um valor com um texto, apenas daria 15 caso ambas as variáveis fossem número

// Exercício 04
const s4 = Number("10") + 5
console.log(s4)

// Exercicio 05
const cpf1 = "355.208.973-69"
const cpf2 = "18230281927"
console.log(`O CPF1 tem ${cpf1.length} letras, já o CPF2 tem ${cpf2.length} letras`)

// Exercício 06
const exe06 = 19.5
console.log(exe06.toFixed(2), "| Tipo do resultado:", typeof exe06.toFixed(2))

//Exercício 07
const exe07 = "Joelma"
console.log(exe07.toUpperCase())