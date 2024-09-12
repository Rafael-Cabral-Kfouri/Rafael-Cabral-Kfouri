algoritmo "Soma diagonal"
var
   m: vetor [1..4, 1..4] de inteiro
   l, c, sDP, p2L, maior3: inteiro
inicio
      sDP <- 0
      p2L <- 1
      maior3 <- 0
      para l <- 1 ate 4 faca
          para c <- 1 ate 4 faca
               Escreva("Digite o valor da posição [", l, ",", c, "]: ")
               Leia (m[l,c])
               Se (l = c) entao
                  sDP <- sDP + (m[l,c])
               fimSe
          fimpara
      fimpara

      para l <- 1 ate 4 faca
           para c <- 1 ate 4 faca
                Escreva (m[l, c]: 4)
           fimpara
           Escreval()
      fimpara
      
      para c <- 1 ate 4 faca
           p2L <- p2L * m[2,c]
      fimpara

      para l <- 1 ate 4 faca
           Se m[l,3] > maior3 entao
              maior3 <- m[l,3]
           fimSe
      fimpara


      Escreval("A soma dos elementos da diagonal principal é: ", sDP)
      Escreval("o produto da linha 2 é ", p2L)
      Escreval("O maior valor da coluna 3 é: ", maior3)
fimalgoritmo
