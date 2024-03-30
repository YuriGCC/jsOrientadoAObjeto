import { Cliente } from "./cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    static numeroDeContas = 0

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) return;
        this._cliente = novoValor; 
    }

    get cliente() {return this._cliente;}

    get saldo() {return this._saldo;}

    _saldo = 0;

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return valor;
        }

        return false;
    }
    
    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++
    }

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
        return valor;
    }

    transferir(valorSacado, conta) {
        const valor_sacado = this.sacar(valorSacado);
        conta.depositar(valorSacado);
    }
}
