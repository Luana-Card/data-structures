function Queue() {
    var itens = []

    this.queue = function(item) {
        // add item
        itens.push(item)
    }

    this.dequeue = function() {
        // remove item
        return itens.shif() //remove o da frente
    }

    this.first = function() {
        // retorna queue[0]
        return itens[0]
    }

    this.isEmpty = function() {
        // retorna booleano (vazio ou !vazio)
        return itens.length === 0
    }

    this.print = function() {
        console.log(itens.toString())
    }
}