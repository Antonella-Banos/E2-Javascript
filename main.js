const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];



// E2 - JAVASCRIPT 

// Ejercicio A - Las pizzas que tengan un id impar.

const idImpares = pizzas.filter ((pizza) => {
	return pizza.id % 2 !== 0;
});

idImpares.forEach( (pizza) => {
   
        console.log(` La ${pizza.nombre} tiene id impar`);
} );


// Ejercicio B - Responder: ¿Hay alguna pizza que valga menos de $600?

const precioMenorA600 = pizzas.find ( (pizza) => {
    return pizza.precio < 600;    
    }
);

console.log (`La ${precioMenorA600.nombre} tiene un valor de $${precioMenorA600.precio}`);


// Ejercicio C - El nombre de cada pizza con su respectivo precio.

pizzas.forEach ( (pizza) => {
  console.log( `${pizza.nombre} : $${pizza.precio}`);
});


// Ejercicio D - Todos los ingredientes de cada pizza. 

pizzas.forEach ( (pizza) => {
  console.log(`Ingredientes de ${pizza.nombre}:`);
  pizza.ingredientes.forEach ( (ingredientes) => {
    console.log(`${pizza.ingredientes}`);
  })
} );





