// Aula 14

// Estrutura de repetição com variável de controle
//for(início; teste; incr)

for(let c = 1; c <= 10; c++){
    console.log(`Teste ${c}`)
}

// Exercício 01
for(let n = 1; n <= 5; n++){
    console.log(`Exercício 01 - ${n}`)
}
// As três peças do laço, comparando com a aula 13:
// No while ficam espalhadas - o início antes do laço, o teste no
// cabeçalho e o incremento no fim do corpo.
// No for ficam as três na mesma linha, e faltar uma vira buraco visível.
// Por isso é mais difícil escrever um laço infinito sem querer com for.

// Exercício 02
for(let n = 1; n <= 5; n++){
    console.log(`Exercício 01 - ${n}`)
}

// O n foi declarado dentro do for, então deixa de existir quando o laço fecha.
// Não é undefined (existe sem valor), é ReferenceError (não existe).
// Na aula 13 o n ficava fora do while, por isso continuava valendo 6 depois.

// Exercício 03
for(let i = 10; i >= 1; i --){
    console.log(i)
}

// Exercício 04 
for(let i = 10; i > 1; i --){
    console.log(i)
}
// Saíram 9 linhas em vez de 10: de 10 até 2, o 1 ficou de fora.
// Com > o limite não entra; com >= entra. Vale igual subindo, com < e <=.

// Exercício 05
for(let idade = 15; idade <= 19; idade++){
    let resultado
    if(idade < 16){
        resultado = "Não pode votar"
    } else if(idade < 18){
        resultado = "Voto facultativo"
    } else if(idade < 70){
        resultado = "Voto obrigatório"
    } else{
        resultado = "Voto facultativo"
    }

    console.log(`${idade} - ${resultado}`)
}

for(let idade = 68; idade <= 71; idade++){
    let resultado
    if(idade < 16){
        resultado = "Não pode votar"
    } else if(idade < 18){
        resultado = "Voto facultativo"
    } else if(idade < 70){
        resultado = "Voto obrigatório"
    } else{
        resultado = "Voto facultativo"
    }

    console.log(`${idade} - ${resultado}`)
}