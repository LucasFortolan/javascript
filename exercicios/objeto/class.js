// Definição da classe Pessoa
class Pessoa {
    // Construtor que inicializa os atributos da classe
    constructor(nome, peso, sexo, altura) {
        this.nome = nome;     // atributos 'nome'
        this.peso = peso;     // atributos 'peso'
        this.sexo = sexo;     // atributos 'sexo'
        this.altura = altura; // atributos 'altura'
    }

    // Método para engordar, que aumenta o peso da pessoa
    engordar(p = 0) {
        console.log(`${this.nome} engordou ${p}kg`);
        this.peso += p; // Adiciona o peso ao peso atual
    }

    // Método para exibir informações da pessoa
    exibirInfo() {
        console.log(`${this.nome} pesa ${this.peso}Kg e tem ${this.altura}m de altura`);
    }
}

// Instanciando objetos da classe Pessoa
const pessoa1 = new Pessoa('Ana', 60.5, 1.65);
const pessoa2 = new Pessoa('Carlos', 75.3, 1.78); 
const pessoa3 = new Pessoa('Mariana', 54.0, 1.60); 

// Usando o método engordar de cada objeto
pessoa1.engordar(2); // Ana engorda 2kg
pessoa2.engordar(3); // Carlos engorda 3kg
pessoa3.engordar(1.5); // Mariana engorda 1.5kg

// Exibindo informações de cada pessoa
pessoa1.exibirInfo();
pessoa2.exibirInfo();
pessoa3.exibirInfo();
