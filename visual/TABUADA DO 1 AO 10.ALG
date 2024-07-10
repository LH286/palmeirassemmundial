algoritmo "Tabuada do 1 ao 10"
// Data : 09/10/2023
var
   i,j:inteiro
inicio
   EscrevaL("Tabuada geral")
   EscrevaL("")

   Para i de 1 ate 10 faca
      escreval("")
      Escreval("  Tabuada de",i)
      escreval("")
      Para j de 0 ate 10 faca
         se i < 10 então
            Escreva(" ")
         fimse
         Escreva( i ," x")
         se j < 10 então
            escreva(" ")
         fimse
         escreva( j," =" )
         se j*i < 10 então
            escreva("  ")
         senao
            se j*i < 100 então
               escreva(" ")
            fimse
         fimse
         escreval( j * i)
      fimpara
   fimpara
   EscrevaL(" ")
   EscrevaL(" ")

fimalgoritmo
