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

const peso = 30
const Altura = 1.70
const IMC = peso / (Altura * Altura) /* Ou Math.pow(altura, 2); */

console.log('Seu IMC é: ' + IMC.toFixed(0))
if (IMC < 18.5) {
    console.log('Você esta abaixo do peso')
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Você esta no peso normal')
} else if (IMC >= 25 && IMC <= 30) {
    console.log('Você esta acima do peso')
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Você esta obeso')
} else {
    console.log('Você com obesidade grave')
}

