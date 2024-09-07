//EXERCÍCIO 03 - PÁG 45 DO LIVRO
/*Elaborar um programa que leia o preço de um produto e informe as opções de pagamento. Informar quanto é o pagamento à vista com 10% de desconto e o valor em 3 vezes. Exemplo abaixo:
Preço 60,00
À vista 54,00
Ou em 3x de: 20,00*/

let preco = 60
let desconto = 10
let parcela = preco/3
let aVista = preco - (preco*desconto/100)
console.log (`O valor do pagamento à vista é R$${aVista},00 ou pague 3x de R$${parcela},00 ` )
console.log(aVista)
