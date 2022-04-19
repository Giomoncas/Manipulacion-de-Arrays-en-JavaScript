const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();  //Por defecto ordena de acuerdo a la tabla ASCII
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a); //Forma de ordenar con SORT numeros de mayor a menor
console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b)); //Forma de ordenar con SORT palabras de menor a mayor
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => b.total - a.total);  //Ordenar las ordenes de acuerdo al mayor cantidad de compras
  console.log(orders);