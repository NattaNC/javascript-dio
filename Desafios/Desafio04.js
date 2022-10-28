function EscreverNome(nome) {
    return 'Meu nome é: ' + nome
}

function VerIdade(idade) {
    if (idade >= 18) {
        console.log(EscreverNome('Nathan') + ' voce é maior de idade')
    } else {
        console.log('Voce é menor de idade')
    }
}

VerIdade(19)
