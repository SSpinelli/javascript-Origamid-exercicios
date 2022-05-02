// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

const handleLink = (click) => {
  click.preventDefault();
  linkInterno.forEach((link) => {
    if (link === click.target) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
    }
  })
}

linkInterno.forEach((link) => link.addEventListener('click', handleLink));

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');

const whatsTheElement = (click) => {
  console.log(click.currentTarget)
  click.currentTarget.remove();
};

// allElements.forEach((element) => element.addEventListener('click', whatsTheElement));

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const removeElement = (click) => click.target.remove();

// document.body.addEventListener('click', removeElement);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const changeTypoSize = (keydown) => {
  if(keydown.key === 't') {
    document.documentElement.classList.toggle('texto-maior');
  }
}
 
window.addEventListener('keydown', changeTypoSize)