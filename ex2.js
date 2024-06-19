
// Uso adecuado de let y scope para actualizar una variable
// Somos portero de una discoteca y nos indican la edad de la persona que quiere entrar

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = false;
let edad = 21;

if (edad >= 18) {
    puedesPasar = true;
}

console.log(puedesPasar) // Debería ser true pero vale false. ¿por qué?

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'? porque la estabas volviendo a declarar dentro del if y por tanto ya no usabamos variable global sino local y se perdia fuera del entorno del if. 
