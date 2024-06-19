//Ejecuta este código en otro fichero e intenta entender que estas viendo por consola:

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
});
