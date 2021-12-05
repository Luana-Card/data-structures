//ARRAYS DE 2 DIMENSÕES
var monthlyRating = []
var monthlyRating2001 = [589, 595, 610, 613, 610, 620, 720, 300, 510, 540, 620, 625]
var monthlyRating2002 = [589, 595, 610, 613, 610, 620, 720, 300, 510, 540, 620, 625]

monthlyRating[0] = monthlyRating2001
monthlyRating[1] = monthlyRating2002

console.log(monthlyRating) //mostra que cada posição do array tem os 12 valores correspondentes

//PARA ACESSAR UMA POIÇÃO ESPECÍFICA EM UM ARRAY BIDIMENSIONAL

console.log(monthlyRating[0][3]) //acessa o número 613 (array 0, elemento 3)
console.log(monthlyRating[1][11]) //acessa o número 625 (array 1, elemento 11)
