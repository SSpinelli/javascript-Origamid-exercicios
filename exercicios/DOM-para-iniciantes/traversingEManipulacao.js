// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy');
const menuClone = menu.cloneNode(true);
// footer.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const lista = document.querySelector('.faq-lista')
const firstDt = lista.firstElementChild;
console.log(firstDt)

// Selecione o DD referente ao primeiro DT
const firstDd = firstDt.nextElementSibling;
console.log(firstDd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animals = document.querySelector('.animais');

faq.innerHTML = animals.innerHTML;
