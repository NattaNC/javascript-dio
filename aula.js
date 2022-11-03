let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
    if (valor === element) {
      console.log(`Achei ${valor} na posição ${elementos.indexOf(valor)}`)
    } else {
      console.log(`Numero ${valor} não foi encontrado`)
    }
}