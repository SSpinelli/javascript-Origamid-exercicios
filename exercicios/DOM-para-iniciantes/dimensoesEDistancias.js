// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');

const marginTop = firstImage.offsetTop;
// console.log(marginTop);

// Retorne a soma da largura de todas as imagens
window.onload = () => {
  const allImages2 = document.querySelectorAll('img');
  let sumOfWidths = 0;
  
  allImages2.forEach((image) => sumOfWidths += image.offsetWidth);
  // console.log(sumOfWidths)
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a');
// console.log(allLinks)
allLinks.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  // if (linkHeight >= 48 && linkWidth >= 48) {
  //   console.log(link, 'ta certo!')
  // } else {
  //   console.log(link, 'ta errado')
  // }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
