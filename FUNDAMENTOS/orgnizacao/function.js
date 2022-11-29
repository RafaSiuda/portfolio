//Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//Função com Retorno

function soma(a, b=1){
    return a + b
}
console.log(soma(5,10))
console.log(soma(2, ))