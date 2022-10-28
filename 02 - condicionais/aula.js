
/*
--- Desafio aula ---
Faça um programa para caulcular o valor de uma viagem.

você terá 5 variaveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço do Combustivel;
    3 - Tipo de combustivel que está no carro;
    4 - Gasto médio do combustivel;
    5 - Distância em KM da viagem;
*/


const PrecoGasolina = 4.88
const PrecoEtanol = 3.41
const GastoMedioCombustivel = 13
const DistanciaEmKm = 200
const TipoCombustivel = 'Gasolina'

const QuantidadeDeLitros = DistanciaEmKm / GastoMedioCombustivel

if (TipoCombustivel === 'Gasolina') {
    const TotalGasto = QuantidadeDeLitros * PrecoGasolina
    console.log(TotalGasto.toFixed(2))
} else {
    const TotalGasto = QuantidadeDeLitros * PrecoEtanol
    console.log(TotalGasto.toFixed(2))
}












/* const numero = 4;

const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar) {
    console.log('O numero é par')
} else {
    console.log('o numero é impar')
} */
