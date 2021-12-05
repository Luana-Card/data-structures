//basicamente para outras conversões é seguida a mesma lógi

function moreConversions(number, base) {
    var restStack =[],
    rest,
    convertedNumber = ''

    //o número pasa pelo while1 até satisfazer a condição, passa pelo while2 e repete o processo
    while (number != 0) {
        rest = Math.floor(number % base) //Math.floor() arredonda o número p/ baixo
        restStack.push(rest) //vai adicionando os restos no array restStack
        number = Math.floor(number / base) 
    }

    while (restStack.length != 0) {
        convertedNumber += restStack.pop().toString() //tira o último elemento (seguindo a condição LIFO) ---> esvaziando o array e passando para binaryString como retorno
    }

    return convertedNumber // o resultado é o array invertido
    
    // return restStack.reverse().toString()
}

// console.log(moreConversions(23,8))