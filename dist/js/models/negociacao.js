export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get valor() {
        console.log(this._valor);
        return this._valor;
    }
}
