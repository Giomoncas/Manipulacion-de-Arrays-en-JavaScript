const numbers = [1, 2, 3, 4];

//Verificar si alguno de los elementos del arreglo es par con ciclo FOR
let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta);

//Verificar si alguno de los elementos del arreglo es par con metodo SOME

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);


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
    total: 2322,
    delivered: false,
  },
];

const rta3 = orders.some((item) => item.delivered);  //Verificamos si hay alguna de las ordenes en estado de entregadas
console.log("rta3", rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),  //Una cita programada para el 1 de enero del año 2021 que empieza a las 10am
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));