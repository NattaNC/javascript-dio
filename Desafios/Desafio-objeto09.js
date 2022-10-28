/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidae de dizer o seu IMC (IMC = peso / (altura * altura))
    Intancia uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    CalcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    ClassificarIMC() {
        const imc = this.CalcularIMC()
        
        if (imc < 18.5) {
            return 'Você esta abaixo do peso'
        } else if (imc >= 18.5 && imc <= 25) {
            return 'Você esta no peso normal'
        } else if (imc >= 25 && imc <= 30) {
            return 'Você esta acima do peso'
        } else if (imc >= 30 && imc <= 40) {
            return 'Você esta obeso'
        } else {
            return 'Você esta com obesidade grave'
        }
    }
}  


const jose = new Pessoa('José', 70, 1.75)

console.log(jose.CalcularIMC())
console.log(jose.ClassificarIMC())