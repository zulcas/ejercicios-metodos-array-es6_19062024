// Método de array map es ampliamente usado en React para renderizar HTML.
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/react/react_es6_array_methods.asp

// A) Usa la función map para restar uno a todos los números del array

let numeros = [1, 2, 3];

let nuevoArray = numeros.map(n => n-1);
//console.log("Apartado A: ", nuevoArray); // [0 , 1, 2];

// B) Usa la función map para transformar a mayúsculas todos los strings de este array
let animales = ["vertín, bigotes"];
let nuevosAnimales = animales.map(elem => elem.toUpperCase()); // TODO
//console.log("Apartado B: ", nuevosAnimales) // ["VERTÍN, BIGOTES"]


// C) Usa la función map para actualizar con la fecha de hoy (new Date().toLocaleString()) la propiedad ultimaVisita de todos los pacientes de una clínica dental

let pacientes = [{
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19'
}];
let pacientesVisitados = pacientes.map(persona => persona.ultimaVisita = new Date().toLocaleString()); // TODO
console.log("Apartado C: ", pacientesVisitados) // La propiedad 'ultimaVisita' de TODOS los pacientes debe estar actualizada a fecha de hoy

// D) DIFÍCIL. Usa la función map para AGREGAR un nuevo campo al array de pacientes. El campo debe llamarse 'avisos'. Si el paciente NO ha pagado la última visita, dicho campo debe contener el string 'Paciente moroso, cobrar!'; en caso contrario, debe dejarse vacío. BONUS: usa un condicional ternario. BONUS: Usa el operador ...object para no tener que escribir todos los campos.

let pacientesAvisos =  pacientes.map(persona => {
    return {
        ...persona, 
        avisos: persona.ultimaVisitaPagada==true ? "":"Paciente moroso, cobrar!"
    };
}); 

// TODO
console.log("Apartado D: ", pacientesAvisos);
/**
 * {
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19',
    avisos: 'Paciente moroso, cobrar!'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19',
    avisos: ''
}
 */


// E) Usa la función map para crear tantos tags <li> como pacientes hay en el array
let pacientesLista = pacientes.map(persona => `<li>${persona.nombre}</li>`); // TODO
console.log("Apartado E: ", pacientesLista);

/**
 * ['<li>Pedro</li>', '<li>María</li>']
 */



