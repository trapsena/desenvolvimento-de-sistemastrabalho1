interface Investimento {
    obterSaldoFinal(): number;
}
//o investimento base vai chama o calculo que vai ser usado em cada um dos tipos de investimento
class InvestimentoBase implements Investimento {
    constructor(private saldo: number, private rendimento: number, private taxa: number) {}

    obterSaldoFinal(): number {
        return this.saldo * (1 + this.rendimento - this.taxa);
    }
}
//depois disso cada investimento vai ter seu proprio valor que vai ser colocado no obter saldo final vindo das classes deles
class Poupanca extends InvestimentoBase {
    constructor(saldo: number) {
        super(saldo, 0.05, 0.01); 
    }
}

class RendaFixa extends InvestimentoBase {
    constructor(saldo: number) {
        super(saldo, 0.08, 0.02);
    }
}

class Fundos extends InvestimentoBase {
    constructor(saldo: number) {
        super(saldo, 0.12, 0.03);
    }
}

//na hora de criar um metodo de investimento nos colocamos o valor inicial e dai ele vai zer o calculo do investimento base
console.log(new Poupanca(1000).obterSaldoFinal()); 
console.log(new RendaFixa(1000).obterSaldoFinal()); 
console.log(new Fundos(1000).obterSaldoFinal()); 

//quase 10 e eu so fiz 4 :(
