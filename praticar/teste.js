const entradas = [1, 2, 3, 4, 5, 6];
let i = 0;

function gets() {
    const valor = entradas[i]
    i++;
    return valor;
}


function print(texto) {
    console.log(texto);
}


module.exports = { gets, print };