const numbers = [1,30,39,29,10,13];

//Verificar si todos los elementos del arreglo cumplen con la condicion de swer mayor o igual a 40 con ciclo FOR
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);

//Verificar si todos los elementos del arreglo cumplen con la condicion de swer mayor o igual a 40 con metodo EVERY
const rta2 = numbers.every(item => item <= 40)
console.log('rta2 EVERY', rta2);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta3 = team.every(item => item.age >= 10);
console.log('rta3 EVERY', rta3);