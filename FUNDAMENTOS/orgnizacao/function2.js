//Armazenando uma função dentro de uma variável

const imprimirSoma = function (a, b) {
console.log(a+b)
}
imprimirSoma(8,9)

//Armazenando uma função arrow em uma variável

const soma = (a, b) =>{
    return a + b
}

//console.log(soma(2,))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao (50, 7))