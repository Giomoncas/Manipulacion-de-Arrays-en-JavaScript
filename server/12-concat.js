const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

//Forma de concatenar arrays por medio de ciclo FOR

const newArray = [...elements];  //Spread Operator
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for', newArray);

//Forma de unir arrays por medio del metodo CONCAT

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];  //Forma de concatenar arrays con spread operator
const rta3 = [...elements, ...'random'];

console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...othersElements);  //Forma de concatenar arrays con spread operator modificando el original
console.log('elements', elements);