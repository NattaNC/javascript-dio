/* 
--- Desafio aula ---
    Faça um programa para caulcular o valor de uma viagem.

    você terá 3 variaveis. Sendo elas:
    1 - Preço do combustivel;
    2 - Gasto médio de combustivel do carro;
    3 - Distância em KM da viagem;
*/

const PrecoCombustivel = 4.88
const DistanciaEmKm = 200
const KmDoCarro = 13

const QuantidadeLitros = DistanciaEmKm / KmDoCarro 

const TotalGasto = QuantidadeLitros * PrecoCombustivel

console.log('Você gastaria uma media de $' + TotalGasto.toFixed(2) + ' na sua viagem')