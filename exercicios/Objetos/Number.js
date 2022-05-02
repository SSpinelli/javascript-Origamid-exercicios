// Retorne um número aleatório
// entre 1050 e 2000
const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
// console.log(randomNumber);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'.split(',');
const arrayNumber = numeros.map((num) => num.trim()).map((n) => Number(n));
const maxNumber = Math.max(...arrayNumber)
// console.log(maxNumber)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
const result = listaPrecos.map((p) => Math.round(Number(p.slice(3).trim().replace(',', '.')))).reduce((acc, number) => acc + number, 0);

console.log(result)
