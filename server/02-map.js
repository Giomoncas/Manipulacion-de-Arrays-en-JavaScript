const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

//Transformar el arreglo con el uso de ciclo for

const newArray = [];
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    newArray.push(element + "++");    
}
console.log("original", letters);
console.log("nuevo FOR", newArray); 

//Transformar el arreglo con el uso del metodo Map

const newArray2 = letters.map(item => item + "--");

console.log("nuevo MAP", newArray2);