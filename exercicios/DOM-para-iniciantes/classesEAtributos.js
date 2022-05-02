// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu ul li');

// menuItens.forEach((item) => item.classList.add('ativo'));
// console.log(menuItens);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// for(let index = 1; index < menuItens.length; index += 1) {
//   menuItens[index].classList.remove('ativo');
// }
// console.log(menuItens);

// Verifique se as imagens possuem o atributo alt
const animalImgs = document.querySelectorAll('img');
// animalImgs.forEach((item) => console.log(item.hasAttribute('alt')));

// Modifique o href do link externo no menu
const linkExterno = document.querySelectorAll('body [href^="h"]');

// linkExterno[0].setAttribute('href', 'https://google.com')
