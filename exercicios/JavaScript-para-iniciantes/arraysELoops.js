// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const brazilWorldChampion = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let index = 0; index < brazilWorldChampion.length; index += 1) {
  console.log(`O brasil ganhou a copa de ${brazilWorldChampion[index]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let index = 0; index < frutas.length; index += 1) {
  console.log(frutas[index]);
  if(frutas[index] === 'Pera') break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const lastFruit = frutas[frutas.length - 1];
