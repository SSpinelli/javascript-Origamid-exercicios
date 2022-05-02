// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const classes = Array.from(document.querySelectorAll('.curso'));
const classesObj = classes.map((i) => {
  return {
    title: i.children[0].innerHTML,
    description: i.children[1].innerHTML,
    classes: i.children[2].innerHTML,
    hours: i.children[3].innerHTML
  }
})
console.log(classesObj);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const greaterThan100 = numeros.filter((i) => i > 100)
console.log(greaterThan100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const hasBass = instrumentos.some(i => i === 'Baixo')
console.log(hasBass);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const total = compras.reduce((acc, item) => {
  return acc + Number(item.preco.replace('R$ ', '').replace(',', '.'));
}, 0)

console.log(total);
