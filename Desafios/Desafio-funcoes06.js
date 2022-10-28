

function CalculaMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

const TrabalhoHTML = 10
const TrabalhoCSS = 10
const TrabalhoJavaScript = 10
const media = CalculaMedia(TrabalhoHTML, TrabalhoCSS, TrabalhoJavaScript)

if (media < 5) {
    console.log('Você Foi Reprovado. Te vejo ano que vem !!')
} else if ( media >= 5 && media <= 7) {
    console.log('Você ficou de recuperação. Deu sorte !!')
} else {
    console.log('Parabéns você foi aprovado. Boa Férias!!')
}


