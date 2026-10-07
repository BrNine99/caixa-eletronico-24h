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

    get saldo(){
        return this.#saldo;
    }
}

class CaixaEletronico {
    constructor(conta){
        this.conta = conta;
    }

    depositar() {
        // Pega o valor do depósito
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        // Fazer o depósito na conta
        this.conta.depositar(valorDeposito);
        // Exibir o saldo atualizado
        this.mostrarSaldo(this.conta.saldo);

    }

    mostrarSaldo(saldo) {
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        document.getElementById("valorDeposito").value = "";
        document.getElementById("valorSaque").value = "";
    }
}

// Criar instâncias
const conta = new ContaBancária();
const caixaEletronico = new CaixaEletronico(conta);