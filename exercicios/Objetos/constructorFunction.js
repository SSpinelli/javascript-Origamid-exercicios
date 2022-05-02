// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Person(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function andar() {
    console.log(nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const maria = new Person('Maria', 25);
const joao = new Person('João', 20);
const bruno = new Person('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  this.elements = document.querySelectorAll(selector);

  this.addClass = function addClass(classe) {
     this.elements.forEach((element) => element.classList.add(classe)) 
  };
  this.removeClass = function removeClass(classe) {
    this.elements.forEach((element) => element.classList.remove(classe))
  };
}

const li = new Dom('li', 'ativar');
