// No cambies los nombres de las funciones.

const { obtenerMayor } = require("../../03-JS-II/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.lenght -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.lenght;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
for (var index = 0; index < array.length; index++) {
 array[index]++;                                         //no entendi

}
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str=palabras.join(" ");
  return str
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if(array[i]==elemento) {
      return true;
    }
  }
    return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma= suma + numeros[i];
    
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // el promedio se saca sumando todos los elementos y dividiendolos por el total de lso elementos
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.lenght      //aca uso la funcion que hice en el ejercicio de arriba para sumar todos los enteros y lo divido por el total
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor = numeros[0];
  for (let i = 0; i < array.length; i++) { 
    if (mayor < numeros[i]) {              //dice que si "mayor" es menor a la var "numeros" de "i" que va cambiando, éste va a adquirir el valor de "numeros" que esta en pasando por i, pero cuando "mayor" sea el numero mayor, no va a entrar en el condicional y se va a quedar así
      mayor = numeros[i];
    }
    
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.lenght === 0){
    return 0;
  }
  if (arguments.lenght === 1) {
    return arguments[0]
  }
  var producto =1;
  for (let i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];   //tambien se puede poner "producto" "*=" "arguments[i]"
    
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var contador= 0;
for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 18) {                      //aca digo que si el valor de "arreglo" es mayor a 18, le sume uno a la variable "contador" q vale 0.
    contador = contador + 1;
  }
} return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===1 || numeroDeDia===7){
    return "Es fin de semana";
  } else{
    "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var string = n.toString(); //esto convierte un num entero en un string
if(string[0]==9){
  return true;
} else{return false}
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var aux = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (aux !== arreglo[i]) {
    return false;
    }
    return true;
  }
} 


function mesesDelAño(array) { // [Enero, Julio, Marzo, Diciembre]
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var aux= []
for (let i = 0; i < array.length; i++) {
  if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ){
   aux.push(array[i]);
  }
  
}
if(aux.lenght < 3) {
  return "No se encontraron los meses pedidos";
} return aux;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var aux=[];
  for (let i = 0; i < array.length; i++) {
    if(array[i]>100) {
      aux.push(array[i])
    }
  }
  return aux;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var array= [];
var suma=numero;
  for (let i = 0; i < 10; i++) {
    suma = suma + 2;
    if(suma===i) { return "Se interrumpió la ejecución"}
    array.push(suma);
    
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
