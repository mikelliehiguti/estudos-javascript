// Aula 23

// Exercício 02
const { classificar } = require("./Votacao")
const { casos } = require("./Casos")

for (const caso of casos) {
    const { idade, esperado } = caso
    if (classificar(idade) === esperado) {
        console.log(`${idade} | OK`)
    } else {
        console.log(`${idade} | FALHOU`)
    }
}

// Exercício 04 
const dayjs = require("dayjs")
console.log(dayjs().format("DD/MM/YYYY"))

// Exercício 05
// Por que node_modules não vai para o git:
//
// 1. Tamanho. São milhares de arquivos, às vezes centenas de MB, para um
//    projeto que de meu tem cinco arquivos. O repositório ficaria enorme
//    e lento para clonar.
//
// 2. É recriável. O package.json guarda o nome e a versão de tudo. Quem
//    clonar o projeto roda "npm install" e a pasta nasce idêntica. Subir
//    ela é guardar uma cópia de uma coisa que já está descrita.
//
// 3. É específica da máquina. Alguns pacotes baixam programas compilados
//    para o sistema operacional de quem instalou. O Playwright é assim:
//    ele baixa navegadores de verdade. Os meus são do Windows e não
//    serviriam para o servidor Linux que roda os testes na empresa.
//
// Já o package-lock.json SOBE, e é importante: ele trava a versão exata
// de cada pacote. Sem ele, duas pessoas rodando "npm install" no mesmo dia
// podem receber versões diferentes - e aí um teste passa na máquina de uma
// e falha na da outra, sem ninguém ter mexido em nada.