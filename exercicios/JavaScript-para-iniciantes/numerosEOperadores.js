// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // R: 35;

// Crie duas expressões que retornem NaN
const a = 15 - undefined;
const b = 20 / 'arvore';
console.log(a, b); // R: NaN e NaN

// Somar a string '200' com o número 50 e retornar 250
const x = '200';
const y = 50;

console.warn(+x + y);

// Incremente o número 5 e retorne o seu valor incrementado
let z = 5;
z++
console.log(z); //R: 6

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

const result = `${numero / 2}${unidade}`

console.log(result); //R: 40kg
