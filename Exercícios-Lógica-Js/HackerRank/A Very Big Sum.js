//Instruções: Construir um algorítmo capaz de guardar em uma varável o valor da soma dos elementos de  um array. Os números desse array são muito grandes.
//imprimir o valor da soma
//parâmetro -> [200,300,1000]. O array é um exemplo que pode estar dentro de -> (ar) 

function aVeryBigSum(ar) {
    let soma = 0
    for(let index = 0; index < ar.length; index +=1){
        soma = soma + ar[index]
    }

    return soma
}
console.log(aVeryBigSum([200,300,1000]))