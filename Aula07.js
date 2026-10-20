// Aula 07

// Operador aritmético → Operadores usados para cálculo
/*
 5 + 2 = 7 (soma)
 5 - 2 = 3 (subtração)
 5 * 2 = 10 (multiplicação)
 5 / 2 = 2.5 (divisão real)
 5 % 2 = 1 (resto da divisão inteira) (valor utilizado é o que sobra da divisão antes de aplicar a vírgula)
 5 ** 2 = 25 (potência, cinco elevado ao quadrado)
 */

 // Aritmética
 const a = 5 + 3 
 const b = a % 5
 const c = 5 * b ** 2 //potência primeiro
 const d = 10 - a / 2
 const e = 6 * 2 / d
 const f = b % e + 4 / e
console.log(a, b, c, d, e, f)

// Auto-atribuição
let n = 3 
n = n + 4 // → n += 4
n = n - 5 // → n -= 5
n = n * 4 // → n *= 4
n = n / 2 // → n /= 2
n = n ** 2 // → n **= 2
n = n % 5 // → n %= 5
console.log(n)

// Incremento
let x = 5
x = x + 1 // x fica 6
x = x - 1 // x fica 5
++x // x fica 6
--x // x fica 5
console.log(x) //mostra 5

// Exercício 01
const n01 = 10
const n02 = 25
const so = n01 + n02
const su = n02 - n01
const mu = n01 * n02
const di01 = n02 / n01
const di02 = n02 % n01
console.log(`Soma = ${so}, subtração = ${su}, multiplicação = ${mu}, divisão real = ${di01}, resto da divisão = ${di02}`)

// Exercício 02
// TODO: na aula 11, usar condição para a mensagem se ajustar sozinha
// resto 0 → par | resto 1 → ímpar
const exe02 = 28
console.log(`Resto da divisão por 2 é igual a ${exe02 % 2}`)

 // Exercício 03
 const exe03 = 2 ** 10
 console.log(exe03)

 // Exercício 04
 console.log(10/0)
 console.log(0/0)
 console.log(typeof Infinity)   // number
 console.log(typeof NaN)        // number

 // Exercício 05
 const exe05 = 0.1 + 0.2
 console.log(exe05)

 // Exercício 06
 console.log(2 + 3 * 4) // 14
 console.log((2 + 3) * 4) //20