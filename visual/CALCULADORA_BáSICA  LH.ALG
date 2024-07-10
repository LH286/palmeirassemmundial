algoritmo "Calculadora_Básica"
          // Função : Fazer as 4 operações Básicas
          // Autor :  LUCAS HENRIQUE
          // Data : 10/07/2024

var
  a,b,res:real
  oper: caracter
inicio
// Seção de Comandos
  escreval ("Entrada de dados:")
  escreva ("Valor 1: ")
  leia(a)
  escreva ("Operador: ")
  leia(oper)
  escreva ("Valor 2: ")
  leia(b)
// estrutura para a escolha da operação
      escolha oper

      caso "+"
      res<- a + b;    //Adição
      caso "-"
      res<- a - b;    //Subtração
      caso "*"
      res<- a * b;    //Multiplicação
      caso "/"
      res<- a / b;    //Divisão
      // caso seja digitado um operado diferente dos programados
      outrocaso
      escreval
      escreva("Erro!!! Operador inválido!!!")
      fimescolha
      {imprime na tela o resultado e a operação e os numeros}
      escreval
      escreval ("Saída dos dados: ")
      escreva ("Resultado: ",a)
      escreva(" ",oper,b)
      escreva (" =",res)
fimalgoritmo
