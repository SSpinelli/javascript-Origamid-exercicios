// Mostre no console cada parágrado do site
const allP2 = document.querySelectorAll('p');
// allP2.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
// allP2.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

//R: Colocando o parentese nos parâmetros
// imgs.forEach(/*item, index*/(item, index) => {
//   console.log(item, index);
// });

//R: Colocando o parentese sem argumento antes da seta
let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

imgs.forEach(() => i++);

