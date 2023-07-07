import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController{
    private inputdata
    private inputquantidade
    private inputvalor

    constructor(){
        this.inputdata = document.querySelector("#data")
        this.inputquantidade = document.querySelector("#quantidade")
        this.inputvalor = document.querySelector("#valor")   
    }

    atualiza(){
        const negociacao1 = new Negociacao(
            this.inputdata.value,
            this.inputquantidade.value,
            this.inputvalor.value
        )
    }

 
}
