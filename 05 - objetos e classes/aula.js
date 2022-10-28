class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e eu nascino ano de ${this.anoDeNascimento}`)
    }
}

const Nathan = new Pessoa('Nathan', 22)
const Matheus = new Pessoa('Matheus', 22)

Nathan.descrever()
Matheus.descrever()

console.log(Nathan)


/*
const Nathan = {
    nome: 'Nathan',
    idade: 22,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
*/




