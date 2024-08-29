let num = [5, 8, 2, 9, 3]  // Declaração de um array com os valores 5, 8, 2, 9 e 3
num.push(1)  // Adiciona o valor 1 ao final do array
num.sort()  // Ordena o array em ordem crescente (modifica o array original)
console.log(num)  // Exibe o array ordenado no console

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)  // Procura o índice do valor 8 no array e armazena na variável 'pos'

if (pos == -1)  // Se o valor 8 não for encontrado, 'indexOf' retorna -1
    console.log("O valor não foi entrado!")  // Mensagem exibida se o valor 8 não estiver no array
else 
    // Mensagem exibida com a posição do valor 8 (substitua aspas simples por crase para funcionar)
    console.log(`O valor está na posição ${pos}`)  // `pos` é o índice onde o valor 8 foi encontrado

// Percorre o array com um loop 'for' tradicional
for (let pos = 0; pos < num.length; pos++)  
    console.log(num[pos])  // Exibe o valor na posição 'pos' atual

// Percorre o array com um loop 'for...in' (mais conciso)
for (let pos in num)  // 'for...in' itera sobre os índices do array automaticamente
    console.log(num[pos])  // Exibe o valor correspondente a cada índice
