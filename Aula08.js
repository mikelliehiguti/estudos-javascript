// Aula 08

// Relacionais - Para toda a operação que tiver o relacional ligada a ela, a resposta será boolean (true or false)
console.log(`${5 > 2}, 5 é maior que 2`) // nesse caso se torna um texto
console.log(5 > 2, "Sim, 5 é maior que 2.")
console.log(7 < 4,"7 não é menor que 4.")
console.log(8 >= 8, "Sim, 8 é igual a 8.")
console.log(9 <= 7, "Não, 9 é maior que 7.")
console.log(5 == 5, "Sim, 5 é igual a 5")
console.log(4 != 4, "Não, 4 é igual a 4")

const a = 8
const b = 12
console.log("A é maior que B?", a > b)
console.log("A é maior que B?", a < b)
console.log(a <= b - 10, "Não, não é.")

// Identidade - Operador de igualdade restrita (três símbolos "===" e "!==")
console.log("5" == 5, "Verdadeiro, pois é feita a conversão do tipo antes da comparação.") // realiza a conversão antes de comparar
console.log ("5" === 5, "Falso, pois não é feita a conversão do tipo antes da comparação.") // não faz a conversão e verifica que um é do tipo texto e outro do tipo número

// Operadores lógicos
const c = 5
const d = 8
console.log(c > d && d % 2 == 0, "d % 2 == é verdadeiro, mas c > d é falso, por esse motivo o retorno é falso") // calucla primeiro os ariméticos, depois os relacionais, e depois os lógicos
console.log(c <= d || d / 2 == 2, "Por se tratar de uma conjunção, é verdadeiro") // d/2 = 2 é falso, mas c é menor ou igual a d, para a conjunção, basta que um dos lados seja verdadeiro para que a expressão seja verdadeira

// Operadores ternários
let média = 5.5
console.log(média > 7 ? "Aprovado" : "Reprovado") //média em 5.5
média += 3 // alterando a média para 8.5
console.log(média > 7 ? "Aprovado" : "Reprovado") //média em 8.5
const x = 8
const resultado = x % 2 === 0 ? 5 : 9 // 0 = 0, como é verdadeiro, o valor atribuído é 5
console.log("O valor de resultado é igual a:", resultado)

const idade = 19
const resultado2 = idade >= 18 ? "Maior" : "Menor"
console.log(resultado2, "É maior que a idade (19)")

// Exercício 01
const exe01 = 10
const exe001 = 3
console.log("Exe01 é maior que Exe001?", exe01 > exe001)
console.log("Exe01 é menor que Exe001?", exe01 < exe001)
console.log("Exe01 é maior ou igual Exe001?", exe01 >= exe001)

// Exercício 02
console.log("5" == 5, "O resultado é verdadeiro devido não verificar o tipo")
console.log("5" === 5, "O resultado é falso, embora os resultados possuam o mesmo valor, não possuem o mesmo tipo")

// Exerício 03
console.log(0 == false)
console.log("" == false) // o == converte os dois lados paea número antes de comparar, então fica 0 == 0
console.log(0 === false)
console.log("" === false)

console.log(Number(false))
console.log(Number(""))
console.log(Number(0))

// Exercício 04
let idade2 = 20
let temCNH = true
console.log("Maior de idade (18 anos) e possui CNH?", idade2 >= 18 && temCNH)
temCNH = false
console.log("Maior de idade (18 anos) e possui CNH?", idade2 >= 18 && temCNH)
idade2 = 16
temCNH = true
console.log("Maior de idade (18 anos) e possui CNH?", idade2 >= 18 && temCNH)


// Exercício 05
const fimDeSemana = false
let feriado = true
console.log("É fim de semana ou feriado?", fimDeSemana || feriado)
feriado = false
console.log("É fim de semana ou feriado?", fimDeSemana || feriado)


// Exercício 06
const logado = true
console.log("Valor:", logado, "| invertido:", !logado)

// Exercício 07
let exe07 = 28
console.log(exe07 % 2 === 0 ? "par" : "ímpar")
exe07 = 27
console.log(exe07 % 2 === 0 ? "par" : "ímpar")