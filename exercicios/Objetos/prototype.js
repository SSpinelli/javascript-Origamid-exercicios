// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Person(nome, sobrenome, idade) {
  this.name = nome;
  this.surname = sobrenome;
  this.age = idade;
}

Person.prototype.fullName = function() {
  return `${this.name} ${this.surname}`
}

const joao = new Person('João', 'Spinelli', 15);
const fernando = new Person('Fernando', 'Mós', 40);
const eduardo = new Person('Eduardo', 'Miyazaki', 35);

// console.log(joao.fullName())
// console.log(eduardo.fullName())
// console.log(fernando.fullName())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name); // HTMLLIElement
console.log(li.click.constructor.name); // Function
console.log(li.innerText.constructor.name); // String
console.log(li.value.constructor.name); // Number
console.log(li.hidden.constructor.name); // Boolean
console.log(li.offsetLeft.constructor.name); // Number
console.log(li.click().constructor.name); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
