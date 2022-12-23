const { gets, print } = require('./teste')

let arr = {'1,2,3,4,5,6'}
let arrVazio = [arr];

function ordenarNumeros(array) {

    const even = array.filter(num => num % 2 === 0);
    const odd = array.filter(num => num % 2 === 1);
  
    return even.concat(odd);
  }

print(ordenarNumeros(arrVazio))

