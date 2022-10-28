class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

function CompararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const nathan = new Pessoa('Nathan', 22)
const matheus = new Pessoa('Matheus', 25)

CompararPessoas(nathan, matheus)