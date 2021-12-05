function toBin(number) {
    var restStack =[],
    rest,
    binaryString = ''

    //o número pasa pelo while1 até satisfazer a condição, passa pelo while2 e repete o processo
    while (number != 0) {
        rest = Math.floor(number % 2) //Math.floor() arredonda o número p/ baixo
        restStack.push(rest) //vai adicionando os restos no array restStack
        number = Math.floor(number / 2) 
    }

    while (restStack.length != 0) {
        binaryString += restStack.pop().toString() //tira o último elemento (seguindo a condição LIFO) ---> esvaziando o array e passando para binaryString como retorno
    }

    return binaryString // o resultado é o array invertido
    
    // return restStack.reverse().toString()
}

console.log(toBin(25))