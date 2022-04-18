const letters = ["a", "b", "c", "d", "e"];

//Uso de for para mostrar cada elemento del array
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("For", element);
}

//Uso de forEach para mostrar cada elemento del array

letters.forEach(item => console.log("For Each", item));

