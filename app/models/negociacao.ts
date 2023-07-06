export class Negociacao{
    #data
    #quantidade
    #valor

    constructor(data,quantidade,valor){
        this.#data = data
        this.#quantidade = quantidade
        this.#valor = valor
    }

    get valor(){
        console.log(this.#valor)
        return this.#valor
    }


}