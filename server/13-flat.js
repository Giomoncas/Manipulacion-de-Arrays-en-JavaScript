const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Forma de manipular arrays que tienen arrays por dentro con un ciclo FOR

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

console.log('for', newArray);

//Forma de manipular arrays que tienen arrays por dentro con el metodo FLAT

const rta = matriz.flat(3);  //En flat debemos decirle hasta que nivel bajemos, en este caso nivel 3
console.log('flat', rta);