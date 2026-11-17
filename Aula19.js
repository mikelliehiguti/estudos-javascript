// Aula 19

// Exercício 01
const nomes = ["Ana", "Bruno", "Carla"]

for (const nome of nomes) {
    console.log(`Exercício 01 | ${nome}`)
}

// Exercício 02
for (let i = 0;  i < nomes.length; i++){
    console.log(`Exercício 02 | ${nomes[i]}`)
}

// Exercício 03
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

const casos = [
    {idade: 15, esperado: "Não pode votar."},
    {idade: 16, esperado: "Voto facultativo."},
    {idade: 17, esperado: "Voto facultativo."},
    {idade: 18, esperado: "Voto obrigatório."},
    {idade: 19, esperado: "Voto obrigatório."},
    {idade: 68, esperado: "Voto obrigatório."},
    {idade: 69, esperado: "Voto obrigatório."},
    {idade: 70, esperado: "Voto facultativo."},
    {idade: 71, esperado: "Voto facultativo."},
    {idade: 100, esperado: "Voto facultativo." }
]

for(const caso of casos){
    const { idade, esperado } = caso

    if (classificar(idade) === esperado) {
        console.log(`OK     | ${idade}`)
    } else {
        console.log(`FALHOU | ${idade} - saiu: ${classificar(idade)} / esperado: ${esperado}`)
    }
}

// Exercício 04
for(let i = 0; i < casos.length; i++){
    const {idade, esperado} = casos[i]

    if (classificar(idade) === esperado){
        console.log(`caso ${i + 1} de ${casos.length} - OK      | ${idade}`)
    } else{
        console.log(`caso ${i + 1} de ${casos.length} - FALHOU      | ${idade}`)
    }
}
