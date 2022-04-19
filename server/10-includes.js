const pets = ['cat', 'dog', 'bat'];

//Forma de trabajar Includes con ciclo FOR

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

console.log('for', includeInArray);

//Forma de trabajar Includes con metodo INCLUDES

const rta = pets.includes('boa');
console.log('includes', rta);