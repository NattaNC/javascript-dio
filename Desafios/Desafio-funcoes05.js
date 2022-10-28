/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha de uma condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e afetuar o calculo
    adequado.

    Código Condição de pagamento
    - À vista Débito, Recebe 10% de desconto;
    - À vista no dinheiro ou Pix, Recebe 15% de desconto;
    - Em duas vezes, preço normal da etiqueta sem juros;
    - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/

function AplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function AplicarJuros(valor, desconto) {
    return (valor + (valor * (desconto / 100)))
}

const precoEtiqueta = 100
const FormaDePagamento = 1

if (FormaDePagamento === 1) {
    console.log(AplicarDesconto(precoEtiqueta, 10))
} else if (FormaDePagamento === 2) {
    console.log(AplicarDesconto(precoEtiqueta, 15))
} else if (FormaDePagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(AplicarJuros(precoEtiqueta, 10))
}
