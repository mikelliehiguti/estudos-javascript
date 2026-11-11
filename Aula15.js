// Aula 15

// Variável simples - Consegue armazenar um valor por vez

// Variável composta - Capaz de armazenar vários valores

let num = [5,4,29,10]
num[4] = 19
num[5] = 28
num.push(94) // Coloca como último
console.log(`${num}`)
num.sort()
console.log(`Exibição em ordem crescente ${num}`)
console.log(`O  vetor tem ${num.length} elementos`)
console.log(`Índice ${num[3]}`)

console.log(num)
for(let pos = 0; pos < num.length; pos++ ){
    console.log(`Parte 1 | A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num ){
    console.log(`Parte 2 | A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(77)
if(pos === -1){
    console.log("Posição inexistente | O valor não foi encontrado!") // pesquisou dentro do vetor e não encontrou nenhuma ocorrência, por isso retorna -1
} else{
console.log(`Posição existente | O valor está na posição ${pos}.`) 
}

pos = num.indexOf(29)
if(pos === -1){
    console.log("Posição inexistente | O valor não foi encontrado!") // pesquisou dentro do vetor e não encontrou nenhuma ocorrência, por isso retorna -1
} else{
console.log(`Posição existente | O valor está na posição ${pos}.`) 
}

// Exercício 01
const idades = [15, 18, 70]
for(let i = 0; i < idades.length; i++){
    console.log(idades[i])
}

// Exercício 02
console.log(`A idade é ${idades[0]}`)
console.log(`A idade é ${idades[1]}`)
console.log(`A idade é ${idades[2]}`)
console.log(`A idade é ${idades[3]}`)

// Exercício 03
for(let i = 0; i <= idades.length; i++){
    console.log(idades[i])
}
// Saíram 4 linhas em vez de 3. A última veio undefined.
// length conta quantos elementos existem (3), mas o último índice é 2,
// porque a contagem começa em zero. Por isso length é sempre um a mais.
// Com <= o i chega a 3, um endereço que não existe, e sai undefined.

// Exercício 04
const idadesVoto = [15, 16, 17, 18, 19, 68, 69, 70, 71]
for(let i = 0; i <idadesVoto.length; i++){
    const idade = idadesVoto[i]
    let resultado
    if(idade < 16){
        resultado = "Não pode votar."
    } else if (idade < 18){
        resultado = "Voto facultativo."
    } else if(idade < 70){
        resultado = "Voto obrigatório."
    } else{
        resultado = "Voto facultativo."
    }

    console.log(`${idade} - ${resultado}`)
}