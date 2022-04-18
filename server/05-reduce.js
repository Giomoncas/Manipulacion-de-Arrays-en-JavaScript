const total = [1,2,3,4,5,6,7,8,9,10];

//Sumar los elementos del array con FOR

let suma = 0;
for(let index = 0; index < total.length; index++){
    const element = total[index];
    suma = suma + element;    
}
console.log(suma);

//Sumar los elementos del array con REDUCE

const respuesta = total.reduce((sum, element) => sum + element, 0);  //De esta manera se utiliza el metodo reduce para sumar los elementos del arreglo
console.log(respuesta);


