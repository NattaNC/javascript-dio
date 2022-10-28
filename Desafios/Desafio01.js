/* 
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação  conforme a tabela abaixo
    
    Média = (nota 1 + nota 2 + nota 3) / 3

    Classificação
    - Média menor que 5, Reprovação;
    - Média entre 5 e 7, Recuperação;
    - Média acima de 7, Passou de Semestre;
*/

const nota1 = 5
const nota2 = 5
const nota3 = 5

const media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média: ' + media.toFixed(1))

if (media < 5) {
    console.log('Você Foi Reprovado. Te vejo ano que vem !!')
} else if (media >= 5 && media <= 7) {
    console.log('Você ficou de recuperação. Deu sorte !!')
} else {
    console.log('Parabéns você foi aprovado. Boa Férias!!')
}
