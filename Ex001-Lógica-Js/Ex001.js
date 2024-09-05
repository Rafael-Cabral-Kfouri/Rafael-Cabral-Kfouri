//Exercício 2 - Página 41 do Livro Lógica de Programação e Algorítmos com Javascript
//3 passos:
//Ler valor do jantar, informar o valor da taxa do graçon(10%) e informar o valor total a ser pago.

let valorJantar = 80;
let taxaGarcon = 10;
let total = 0;

total = 80 + ((taxaGarcon / 100) * 80);//<-reatribuição de variável
//console.log('O valor do jantar é: R$ ' + valorJantar + ',00');
console.log(`O Valor do jantar é : R$ ${valorJantar},00 `);
console.log(`Taxa do Garçom: R$ ${(taxaGarcon/100)*80},00 `);
console.log(`Total a pagar: R$ ${total},00 `);
