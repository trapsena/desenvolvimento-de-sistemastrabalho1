abstract class Veiculo {
    abstract entrega(preco: number): number;
}//classe abstrata pra todomundo te a funcao de entrega dentro de cada classe

// o classico
class Carro extends Veiculo {
    entrega(preco: number): number {
        return preco * 1.2;
    }
}
//isso deve se caro contrata um cara so pra tua encomenda
class Moto extends Veiculo {
    entrega(preco: number): number {
        return preco * 1.5;
    }
}
//caminhao é o mais barato ja que tem a maior quantidade de entrega né?
class Caminhao extends Veiculo {
    entrega(preco: number): number {
        return preco * 1;
    }
}
//aqui tu escolhe o teu veiculo e diz o preço da tua encomenda 
const vrum = new Carro();
console.log(vrum.entrega(100));

const nyom = new Moto();
console.log(nyom.entrega(100));

const beepbeep = new Caminhao();
console.log(beepbeep.entrega(100));

//n sei quanto tempo demorei aqui mas eu preciso ir no banheiro
