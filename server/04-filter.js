const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//Uso de filtro con ciclo FOR

const newArray = [];
for(let index = 0; index < words.length; index++){
    const element = words[index];
    if(element.length > 6){
        newArray.push(element);        
    }
}
console.log("NewArrayFOR", newArray);
console.log("Original", words);

//Uso de filtro con el metodo FILTER

const newArray2 = words.filter(item => item.length > 6);  //Uso de filtro con el metodo FILTER
console.log("NewArray2FILTER", newArray2);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 850,
      delivered: false,
    },
  ];

const newArray3 = orders.filter(item => item.delivered === true && item.total > 100);  //Compara si la propiedad delivered es verdadera y si la propiedad total es mayor que 100 y muestra los objetos que cumplen con esa condicion
console.log("NewArray3FILTER", newArray3);

const search = (query) => {  //Asi podemos crear una funcion que sirve como un buscador
    return orders.filter(item => {        
        return item.customerName.includes(query);
    });
};

console.log(search("Nico"));