export class Negociacao{
    private _data
    private _quantidade
    private _valor

    constructor(data,quantidade,valor){
        this._data = data
        this._quantidade = quantidade
        this._valor = valor
    }

    get valor(){
        console.log(this._valor)
        return this._valor
    }


}