//LIFO (Last In First Out)

//usando classe
function Stack() {
    var itens = []

    //implenetando métodos:

    this.push = function(element){
        itens.push(element)
    }

    this.pop = function(){
        return itens.pop()
    }

    this.peek = function(){
        //retorna o elemento que está no topo da pilha (último elemento)
        return itens[itens.length -1] //refere-se a ultima posição
      }

    this.isEmpty = function(){
        //informa se a pilha etá vazia o não (retorna booleano)
        return itens.length == 0
    }

    this.clear = function(){
        //limpa a pilha
        itens = [] // redefine/zera o array
    }

    this.size = function(){
        //informa o tamanho da pilha
        return itens.length
    }

    this.print = function(element){
        //imprime a ílha
        console.log(itens.toString())
    }
}

var pilha = new Stack() //cria instância da classe Stack
pilha.push(2)
pilha.push(4)
pilha.push(4)
pilha.push(1)

// pilha.clear()

console.log(pilha.isEmpty())