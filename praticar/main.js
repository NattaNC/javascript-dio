const { gets, print } = require('./teste')


let a = 1
let N = 100

let soma = 0

for (let i = a; i <= N; i++) {
    if (i % a === 0) {
        soma = soma + i
    }
}

console.log(soma)



