// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const joao = {
  name: 'João Gabriel',
  surname: 'Soriano Spinelli',
  job: 'Web Developer',
  age: 29,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
joao.fullName = function() {
  return `${this.name} ${this.surname}`;
}

// Modifique o valor da propriedade preco para 3000
const carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  race: 'Labrador',
  color: 'black',
  age: 10,
  barksWhenSeesMan: true,
}
