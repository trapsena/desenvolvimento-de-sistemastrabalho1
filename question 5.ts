interface Produto {
  nome: string;
  preco: number;
} // so precisa de nome e preço eu espero

//o estoque de produto generico pra ser definido na hora dos constats
class Estoque<T extends Produto> {
  private produtos: T[] = [];

  adicionar(produto: T): void {
    this.produtos.push(produto);
  }

  remover(nome: string): void {
    this.produtos = this.produtos.filter(p => p.nome !== nome);
  }//esse filter passa todo mundo pra um novo array que não seja o produto que tu coloco

  listar(): void {
    this.produtos.forEach(p => console.log(`${p.nome} - R$${p.preco}`));
  }
  //esse coisa de for it ´me confundiu dms mas deu
}

const box = new Estoque<{ nome: string, preco: number, tamanho: string }>();
box.adicionar({ nome: "Camiseta", preco: 29.99, tamanho: "M" });
box.adicionar({ nome: "Calça", preco: 89.99, tamanho: "42" });
box.listar();
box.remover("Camiseta"); 
box.listar(); 

//ADSKJGSKLJSDF ESSA MERDA FUNCIONA VAI SE FUDESDGKJGSDRKSGRDKJEGR
