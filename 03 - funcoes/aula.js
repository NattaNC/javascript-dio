/* 
    2) o IMC = Indice de massa corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição do peso de uma pessoa adulta.

    Fórmula do IMC
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

    IMC em Adultos Condição;
    - Abaixo de 18.5 Abaixo do peso
    - Entre 18.5 25 Peso normal
    - Entre 25 e 30 Acima do peso 
    - Entre 30 e 40 Obeso
    - Acima de 40 Obesidade Grave
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificiarImc(IMC) {
    if (IMC < 18.5) {
        return 'Você esta abaixo do peso'
    } else if (IMC >= 18.5 && IMC <= 25) {
        return 'Você esta no peso normal'
    } else if (IMC >= 25 && IMC <= 30) {
        return 'Você esta acima do peso'
    } else if (IMC >= 30 && IMC <= 40) {
        return 'Você esta obeso'
    } else {
        return 'Você com obesidade grave'
    }
}

function main() {
    const peso = 30
    const altura = 1.70

    const IMC = calcularImc(peso, altura)
    console.log(IMC.toFixed(2))
    console.log(classificiarImc(IMC))
}

main ()
