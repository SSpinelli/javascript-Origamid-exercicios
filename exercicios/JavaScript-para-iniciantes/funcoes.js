// Crie uma função para verificar se um valor é Truthy
function verifyIfTrue(x) {
  return !!x;
}
console.log(verifyIfTrue(5));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squareArea(x) {
  return x * 4;
}
console.log(squareArea(20)); //R: 80

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, surname) {
  return `${name} ${surname}`
}
console.log(fullName('João Gabriel', 'Soriano Spinelli')); //R: João Gabriel Soriano Spinelli

// Crie uma função que verifica se um número é par
function verifyIfEven(x) {
  return x % 2 === 0;
}
console.log(verifyIfEven(3)); //R: false

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function whatsTheParamType(param) {
  return typeof(param);
}
console.log(whatsTheParamType(true)); //R: boolean

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
document.body.addEventListener('click', () => console.log('João Gabriel Soriano Spinelli'));

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
