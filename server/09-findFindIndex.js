const numbers = [1,30,49,29,10,13];

//Uso de find con ciclo FOR

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log('for', rta);

//Uso de find con metodo FIND

const rta2 = numbers.find(item => item === 30); //Asi se usa el metodo find para buscar elementos del arreglo que cumplen con la caracteristica
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔'); //Asi se usa el metodo find para buscar elementos del arreglo que cumplen con la caracteristica, muestra el objeto que tiene ese ID
console.log('find', rta3);
const rta4 = products.findIndex(item => item.id === '🍔');  //FindIndex devuelve el indice del objeto que cumpla con la caracteristica, en este caso muestra que ese objeto esta en el indice 1
console.log('findIndex', rta4);