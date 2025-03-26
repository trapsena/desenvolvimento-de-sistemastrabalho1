interface JSON {
  nome: string;
  cpf: string;
  rendaMensal: number;
}


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

try {
  const clienteInvalido = { nome: "Maria", cpf: "98765432100", rendaMensal: "3000" }; // erro no tipo de rendaMensal
  validaJSON(clienteInvalido); // Lança exceção
} catch (error) {
  console.error(error.message); // Exibe "O campo 'rendaMensal' é obrigatório e deve ser um número."
}
