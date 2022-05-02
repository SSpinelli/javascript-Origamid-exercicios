// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
// console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const animalsImages = document.querySelectorAll('[src^="../img/imagem"]');
// console.log(animalsImages);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');
// console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
// console.log(firstH2);

// Selecione o último p do site
const allP = document.querySelectorAll('p');
const lastP = allP[allP.length - 1];

// console.log(lastP);
