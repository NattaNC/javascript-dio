/* 
    1 - Crie uma classe para reprensentar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por quilometro rodado.
    Crie um metodo que dado a quantidade de quilometros e o preço de combustivel nos de o valor gasto em reais para realizar este pescurso.
*/

class Carros {
    marca;
    cor;
    KMporLitro;

    constructor (marca, cor, KMporLitro) {
        this.marca = marca
        this.cor = cor
        this.KMporLitro = KMporLitro
    }

    CalcularGastoCombustivel(distancia, precoCombustivel) {
        return (distancia / this.KMporLitro) * precoCombustivel
    }
    
    descrever() {
        console.log(`O carro é da marca ${this.marca} Possue a cor ${this.cor} e faz ${this.KMporLitro} km por litro`)
    }
}

const km = 70
const preco = 4.88


const corolla = new Carros('Toyota', 'Vermelho', 13)
const f200 = new Carros('Ferrari', 'Roxo', 8)
const palio = new Carros('Fiat', 'Preto', 10)


palio.descrever()
console.log('Voce ira gastar $' + palio.CalcularGastoCombustivel(km, preco))
console.log(palio)

