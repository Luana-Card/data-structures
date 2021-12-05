// var avgTemp = [];

// avgTemp[0] = 31.9
// avgTemp[1] = 32
// avgTemp[2] = 36
// avgTemp[3] = 25
// avgTemp[4] = 32.3
// avgTemp[5] = 35.1

// console.log(avgTemp[5]) //retorna o valor da posição no array






// OUTRA FORMA FAZER ARRAY
// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// daysOfWeek[0] = 'Sunday'
// console.log(daysOfWeek[5]) // acessa/retorna o valor da posição no array





//ACESSANDO ELEMENTOS DE FORMA + EFICIENTE (POR ITERAÇÃO)

// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// for(var i =0; i<daysOfWeek.length; i++)
// //estrutura de repetição que vai percorrer o array
// //i = index
// // xxxx.length retorna o comprimeto do array, sendo usado como uma condição de percurso
// // i++ incrementa até satisfazer a condição descrita no espaço anterior, no caso array.length
// {
//     // console.log([daysOfWeek[i]]); // refere-se ao    
// }


// // fibonacci: A soma dos dois elementos anteriores é o resultado do elemeto posterior
// var fibonacci = []
// fibonacci[0] = 0
// fibonacci[1] = 1
// fibonacci[2] = 1

// for (var i = 3; i < 20; i++) { //referindo-se ao array de posição 3, delimitando a 20 e incrementando para concluir o que foi delimitado
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }

// console.log(fibonacci)





//ADICIONANDO ELEMENTOS/ITENS NO ARRAY

// var fruits = [apple, banana, grape]
// fruits[3] = orange // ou fruits[fruits.length] = orange // caso i=3 já tenha um outro valor ele é redefinido, não inserido no array como novo item





// MÉTODO NATIVO DE INSERÇÃO: PUSH() e UNSHIFT()
// fruits.push(orange) // inserindo depois
// fruits.unshift(orange) //inserindo antes




// REMOVENDO ELEMENTOS DO ARRAY

// REMOVENDO APENAS O ÚLTIMO ELEMENTO
// xxxx.pop() //fruits.pop()

// REMOVENDO APENAS O PRIMEIRO ELEMENTO
// xxxx.shift() //fruits.shift()

// REMOÇÃO E INSERÇÃO DE ELEMENTOS EM POSIÇÕES ESPECÍFICAS:
//REMOÇÃO: MÉTODO SPLICE(X,Y) --> X = a posição de referencia inicial e Y = quantidade de elementos a serem excluidos a partir de X

var fruits = ["apple", "banana", "orange", "grape", "coconut"]
console.log(fruits)

fruits.splice(3,2) //a partir da posição 3 remove 2 elementos
console.log(fruits)


//INSERÇÃO: MÉTODO SPLICE(X,Y,Z) -->
// X = a posição de referencia inicial, Y = 0 (nenhum elemento vai ser excluido e Z = valor dos elementos a serem inseridos)
fruits.splice(2, 0, "avocado", "lemon")
console.log(fruits)