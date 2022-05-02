// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}
// console.log(cor, marca, portas);
// R: por que o cosole.log se encontra fora do escopo de marca e portas! e let/const não vazam escopo.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  //const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
//R: colocar a const dois no escopo global.

// O que fazer para total retornar 500?
var numero = 50;

for(/*var*/let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Trocar o var numero do for para let;
const total = 10 * numero;
console.log(total);
