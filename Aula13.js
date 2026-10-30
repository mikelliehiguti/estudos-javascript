// Aula 13

// Repetições - Laços/interações
// Estrutura de repetição com teste lógico no início
let c = 1
while(c <= 6){
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}

// Estrutura de repeitção com teste lógico no final
do {
    console.log(`Passo ${c}`)
    c++
} while(c <= 6)

// Exercício 01
let n = 1
while(n <=5){
    console.log(`Exercício 01 - ${n}`)
    n ++
}

// Exerício 02
// Sem o c++, o c fica valendo 1 para sempre. A condição c <= 6 nunca
// deixa de ser verdadeira, então o laço não tem como terminar.
// Ctrl + C mata o processo.

// Exercício 03
let exe03 = 10
while(exe03 < 5){               // Não trará nenhum resultado pois é verificado o valor da variável antes de rodar, e nesse caso já vale 10
    console.log(exe03)
    exe03++
}

do{
    console.log(exe03)
    exe03++
}while(exe03 <5)                // Roda primeiro e depois verifica o valor da variável

// Exercício 04
let idade = 15
while (idade <= 19){
    let resultado

    if (idade < 16){
        resultado = "Não pode votar"
    } else if (idade < 18){
        resultado = "Voto facultativo"
    } else if (idade < 70){
        resultado = "Voto obrigatório"
    } else{
        resultado = "Voto facultativo"
    }

    console.log(`${idade} - ${resultado}`)

    idade++
}

idade = 68
while(idade <= 71){
    let resultado
    if (idade < 70){
        resultado = "Voto obrigatório"
    } else{
        resultado = "Voto facultativo"
    }

    console.log(`${idade} - ${resultado}`)

    idade ++
}

// Exercício 05
n = 1
while (n < 5){
    console.log(`Exercício 05 - ${n}`)       // Quatro linhas, já que foi solicitado menor que 5, não menor ou igual
    n ++
}