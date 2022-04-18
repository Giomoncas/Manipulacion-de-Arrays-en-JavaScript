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
  ];
  console.log("original", orders);
  const rta = orders.map((item) => item.total);  //De esta manera solamente extraemos en un nuevo array el total de cada elemento del arreglo
  console.log("rta", rta);
  
  // const rta2 = orders.map((item) => {
  //   item.tax = 0.19;
  //   return item;  //Este error hace una modificación al objeto en memoria.
  // });
  // console.log("rta2", rta2);
  // console.log("original", orders);
  const rta3 = orders.map((item) => {
    return {  //Debemos asergurarnos de generar un nuevo objeto con el metodo Map
      ...item,//EMC6 uso del spread operator para copiar todos los atributos del objeto original
      tax: 0.19,
    };
  });
  console.log("rta3", rta3);
  console.log("original", orders);