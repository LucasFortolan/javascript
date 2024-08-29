let pessoa = {
    // Define o objeto 'pessoa' com seus atributos e métodos
    nome: 'Joao',
    sexo: 'M', 
    peso: 85.4,

    // Método 'engordar' que recebe um parâmetro 'p' com valor padrão 0
    engordar(p = 0) {
        console.log('Engordou'); 
        this.peso += p; // Incrementa o valor de 'peso' da pessoa pelo valor de 'p'
    }
}

// Chama o método 'engordar' do objeto 'pessoa' e passa 2 como argumento
pessoa.engordar(2);

// Imprime o nome e o peso atual da pessoa
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`);
