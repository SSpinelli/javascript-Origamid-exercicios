const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const removeFirst = comidas.shift();
const removeLast = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe');
console.log(removeFirst, removeLast);
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const reverseOrder = estudantes.reverse();
console.log(reverseOrder)
const order = estudantes.sort();
const verifyJoana = estudantes.includes('Joana');
const verifyJuliana = estudantes.includes('Juliana');
console.log(order);
console.log(verifyJoana, verifyJuliana);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
const newHtml = html.split('section').join('ul').split('div').join('li');
console.log(newHtml);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const backupCarros = carros.slice();
carros.pop();
console.log(carros)
console.log(backupCarros)
