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
const precoEtiqueta = 100
const FormaDePagamento = 4

if (FormaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1))
} else if (FormaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (FormaDePagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}















/*
const PrecoProduto = 289.90

const PagamentoDebito = 10 / 100 * PrecoProduto
const PagamentoPix = 15 / 100 * PrecoProduto
const PagamentoParcelado = 10 / 100 * PrecoProduto

const FormaDePagamento = 'Parcelado'


if (FormaDePagamento === 'Debito') {
    const PrecoAtualComDescontoDebito = PrecoProduto - PagamentoDebito
    console.log('Você escolheu a forma de pagamento Débito e terá 10% de desconto ' + PrecoAtualComDescontoDebito)
} else if (FormaDePagamento === 'Pix','Dinheiro') {
    const PrecoAtualComDescontoPix = PrecoProduto - PagamentoPix
    console.log('Você escolheu a forma de pagamento em dinheiro ou pix e terá 15% de desconto ' + PrecoAtualComDescontoPix)
} else if (FormaDePagamento === 'Parcelado') {
    const PrecoAtualComDescontoParcelado = PrecoProduto + PagamentoParcelado
    console.log('Você escolheu a forma de pagamento parcelado e terá 10 de Juros ' + PrecoAtualComDescontoParcelado)
} else {
    console.log('Escolha uma Forma de pagamento que seja aceito.')
}
*/