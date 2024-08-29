// Classe Produto para representar cada produto individualmente
class Produto {
    // Construtor que inicializa as propriedades do produto
    constructor(nome, preco, quantidade) {
        this.nome = nome; // Nome do produto
        this.preco = preco; // Preço do produto
        this.quantidade = quantidade; // Quantidade do produto em estoque
    }

    // Método para exibir informações do produto
    exibirInfo() {
        console.log(`Produto: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Quantidade em estoque: ${this.quantidade}`);
    }
}

// Classe CadastroDeProdutos para gerenciar uma lista de produtos
class CadastroDeProdutos {
    // Construtor que inicializa um array vazio para armazenar os produtos
    constructor() {
        this.produtos = []; // Array que armazenará todos os produtos cadastrados
    }

    // Método para adicionar um novo produto ao cadastro
    adicionarProduto(nome, preco, quantidade) {
        const novoProduto = new Produto(nome, preco, quantidade); // Cria um novo objeto Produto
        this.produtos.push(novoProduto); // Adiciona o novo produto ao array 'produtos'
        console.log(`Produto ${nome} adicionado ao cadastro.`);
    }

    // Método para remover um produto do cadastro pelo nome
    removerProduto(nome) {
        // findIndex() encontra o índice do produto com o nome especificado
        const index = this.produtos.findIndex(produto => produto.nome === nome);

        // Verifica se o produto foi encontrado no array
        if (index !== -1) {
            // splice() remove o produto do array 'produtos' com base no índice encontrado
            this.produtos.splice(index, 1);
            console.log(`Produto ${nome} removido do cadastro.`);
        } else {
            // Caso o produto não seja encontrado, exibe uma mensagem
            console.log(`Produto ${nome} não encontrado no cadastro.`);
        }
    }

    // Método para listar todos os produtos cadastrados
    listarProdutos() {
        // Verifica se há produtos cadastrados
        if (this.produtos.length === 0) {
            console.log('Nenhum produto cadastrado.');
        } else {
            console.log('Produtos cadastrados:');
            // forEach() percorre todos os produtos e executa o método exibirInfo() de cada um
            this.produtos.forEach(produto => produto.exibirInfo());
        }
    }
}

// Exemplo de uso do CadastroDeProdutos
const cadastro = new CadastroDeProdutos(); // Cria uma instância da classe CadastroDeProdutos

// Adicionando produtos ao cadastro
cadastro.adicionarProduto('Celular', 1500.00, 10); // Adiciona um produto ao cadastro
cadastro.adicionarProduto('Notebook', 3500.00, 5); // Adiciona outro produto ao cadastro
cadastro.adicionarProduto('Tablet', 1200.00, 8); // Adiciona mais um produto ao cadastro

// Listando todos os produtos cadastrados
cadastro.listarProdutos(); // Lista todos os produtos cadastrados

// Removendo um produto do cadastro
cadastro.removerProduto('Notebook'); // Remove o produto 'Notebook' do cadastro

// Listando novamente após a remoção
cadastro.listarProdutos(); // Lista os produtos restantes no cadastro
