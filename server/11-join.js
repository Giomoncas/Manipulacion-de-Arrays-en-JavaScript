const elements = ["Fire", "Air", "Water"];

//Uso de Join por medio de un ciclo FOR

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

//Uso de Join por medio de un metodo JOIN

const rta = elements.join('--')
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);