algoritmo "inicializacao_e_impressao_arrays"
var
    nomes: vetor[1..3] de caractere
    i: inteiro
inicio
    // Inicializando o array com valores
    nomes[1] <- "Ana"
    nomes[2] <- "João"
    nomes[3] <- "Maria"

    // Imprimindo os valores do array
    para i de 1 ate 3 faca
        escreva(nomes[i], " ")
    fimpara
fimalgoritmo