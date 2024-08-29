n1 = 85.25
n1.toFixed(2) // Define duas casas decimais
n1.toFixed(2).replace('.',',') // Altera o '.' para ','
n1 = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // Formatar como moeda BRL, adicionando o R$
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUA'})
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})