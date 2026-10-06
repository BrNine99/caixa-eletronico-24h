// Definir classe ContaBancária

class ContaBancária {
    //Propriedade
    #saldo;        // Define atributo privado (proteçao de dados).
    constructor(){
        this.#saldo = 0;
    }

    //Métodos
    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        return valor <= this.#saldo;
    }

    get verSaldo(){
        return this.#saldo;
    }
}