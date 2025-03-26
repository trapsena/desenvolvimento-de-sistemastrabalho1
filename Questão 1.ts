interface JSON {
  nome: string;
  cpf: string;
  rendaMensal: number;
} //json com o nome cpf e a renda


function validaJSON(JSON: any): void {
    //ve se o tipo do Nome e do CPF sendo string
    if (typeof JSON.nome !== 'string') {
        throw new Error("Nome tem que se string");
    }
    if (typeof JSON.cpf !== 'string'){
        throw new Error("CPF tem que se string")
    }
    if (typeof JSON.rendaMensal !== 'number') {
        throw new Error("Renda tem que ser number");
    }

    
}
//demorei tres anos pra descobri como funciona o try 
try {
  const clienteInvalido = { nome: "Maria", cpf: "98765432100", rendaMensal: "3000" }; // erro no tipo de rendaMensal
  validaJSON(clienteInvalido); 
} catch (error) {
  console.error(error.message); 

//duvido que vo consegui fazer mais uma
//ja deu por hoje
