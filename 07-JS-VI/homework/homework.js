// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var mayus = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return mayus;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}


function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];                          //es decir a suma le voy agregando el valor igual a numeros en posicion de [i]
  }
  cb(suma);
}

function forEach2(array, cb) {
  // quiero tener ahora un array con las iniciales
  const array = ['tomas', 'ramiro', 'melina', 'mariano'];

  // const iniciales = [];
  // for (let i = 0; i < array.length; i++) {
  //   iniciales.push(array[i].charAt(0))
  // }

  // forEach es una funcion que tienen los arrays. asi como como los strings tienen charAt,
  // los arrays tienen otras funciones.
  // forEach recibe como parametro una FUNCIÓN. No un numero, no un array, no un boolean, no un string. una funcion.
  // ESA funcion (la que mandás por parámetro), la escribis vos. La condición es que reciba un parametro, y ese parametro
  // va a ser un elemento del array. La funcion forEach lo que hace, es llamar a la funcion que vos le mandas, una vez por
  // cada elemento del array.
  

  array.forEach(function (elemento) {
    console.log(elemento);
  });

  // en la consola verias esto:
  // tomas
  // ramiro
  // melina
  // mariano

  // porque, forEach llama a tu funcion por cada elemento del array. Y vos en tu funcion haces console.log del elemento
  // que te pasa forEach.

  // const iniciales = [];
  // array.forEach(function (elemento) {
  //   console.log(elemento.charAt(0))
  //   iniciales.push(elemento.charAt(0))
  // })

  // map es IGUAL a forEach. Con la diferencia de que la función "map" devuelve un nuevo array
  // con los elementos del array original (array.map <- de ese array) modificados segun la funcion que le pases.

  // const resultado = array.map(function (elemento) {
  //   return 1;
  // });
  // resultado va a ser [1, 1, 1, 1]. Un 1 por cada elemento del array original.

  // const iniciales = array.map(function (elemento) {
  //   return elemento.charAt(0);
  // })

  // Ahora, quiero que VOS implementes la funcion mapByTomas. Esta funcion, es prácticamente igual a la funcion map
  // de los arrays, pero la diferencia es que tu funcion va a recibir el array original por parametro, además de la funcion
  // que reciben forEach y map. Escribi la funcion sin usar la funcion map de los arrays (osea, no usar array.map).

  // function mapByTomas(array, funcionn) {
  //   return array.map(function(elemento){
  //     return funcionn(elemento)
  //   })
  //   // [1 * 2, 2 * 2, 3 * 2, ...]
  // }

  // a funcionn generalmente se le llama callback
  function mapByTomas(array, funcionn) {
    var nuevoarray = [];
    for (let i = 0; i < array.length; i++) {
      nuevoarray.push(funcionn(array[i]))
      
    }
    return nuevoarray
  }

  // de aca para abajo, no tocas.
  const resultado = mapByTomas([1, 2, 3, 4], function (elemento) {
    return elemento * 2;
  });

  console.log(resultado) // [2, 4, 6, 8];
}



function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    cb(elemento);                       //tambien se puede hacer  array.foreach(cb);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoarray=[];
  nuevoarray= array.map(function(params) {
    return cb(params);

  });
  return nuevoarray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var filtrado = array.filter(function(params) {
    return params[0] === "a";
  })
  return filtrado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
