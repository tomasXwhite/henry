// No cambies los nombres de las funciones.

function crearUsuario() {
  // JS = ES
  // ~2016 sale una nueva version de JS (EcmaScript 6) con features muy copadas.
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
   }
   Usuario.prototype.saludar = function() {          
    return "Hola, mi nombre es " + this.nombre;
    
   }
 return Usuario;
}

  // // Estas creando una "plantilla" para tus usuarios.
  // // Estás diciendo, que cada uno de tus usuarios, tienne un nombre de usuario,
  // // un nombre, email, etc...
  // function Usuario(opciones) {
  //   this.usuario = opciones.usuario;
  //   this.nombre = opciones.nombre;
  //   this.email = opciones.email;
  //   this.password = opciones.password;
  // }
  // Usuario.prototype.saludar = function () {
  //   return "Hola mi nombre es " + this.nombre;
  // };

  // // Usuario.call({}); -> this es {}
  // // Usario(); -> this es undefined
  // // new Usuario(); -> this es EL NUEVO OBJETO que se crea.
  // return Usuario;

function funcionAuxiliar() {
  // Escribir una funcion constructor "Casa", que funcione como plantilla para
  // distintas casas indivuduales. Ponele los campos que creas que tienen sentido.
  
  // Despues, instanciá un nuevo objeto, con la información de la casa en la que estás

  function Casa(parametros) {
    this.ventanas = parametros.windows;
    this.puertas = parametros.doors;
    this.colores = parametros.colors;
  }

  // esto esta bien
  var params={};
  params.windows = 5;
  params.doors = 2;
  params.colors= 1;

  // tambien, lo podes escribir todo "de una". es otra forma de escribirlo nomas.
  const params2 = { // o var
    windows: 5,
    door: 2,
    colors: 1,
  };

  // esto es equivalente a console.log(params2);
  console.log({
    windows: 5,
    door: 2,
    colors: 1,
  });

  // quiero construir una nueva casa, "basada" en la información que escribi en "params"
  const nuevacasa = new Casa(params);
  console.log(nuevacasa.ventanas) // 5

  /*
  También podes construir un objeto llamandolo:
  const nuevacasa2 = new Casa({
    windows: 5,
    door: 2,
    colors: 1,
  });
  Y funciona exactammente igual, a lo que escribimos antes.
  */

  // cuando se ejecuta, a vale "1", y b vale "2"

  //en el caso de casa, cuando se ejecuta, "parametros" """vale""" lo mismo que params.
  
  /*
  1) Vos dijiste params = {...}. Osea, llenaste un objeto, con informacion.
  2) const nueva casa = new casa(params).
  3) Eso, hace que se llame a la funcion "casa", con "parametros" = "params", y "this" = al nuevo objeto.
  4) Osea, que la funcion casa, se ejecuta como si pasara esto:

  lo que en la funcion "casa" era "parametros", ahora es "params"
  y lo que era "this", ahora es el nuevo objeto.

    nuevacasa.ventanas = params.windows;
    nuevacasa.puertas = params.doors;
    nuevacasa.colores = params.colors;
  */
  
}

function registrarUsuario() {
  // nuevo usuario es un objeto, basado en la plantilla "Usuario"
  // nuevoUsuario es una "instancia" de la "clase" Usuario.
  // "new" = "Crear un objeto, usando a la funcion Usuario como si fuera una plantilla"
  const nuevoUsuario = new Usuario({
    usuario: 'juan18',
    nombre: 'Juan',
    email: 'juan@example.com',
    password: '123456',
  });

  /*
    const nuevoUsuario = {};
    nuevoUsuario.usuario = opciones.usuario; -> `this` es el objeto que crea la keyword "new"
    nuevoUsuario.nombre = opciones.nombre;
    nuevoUsuario.email = opciones.email;
    nuevoUsuario.password = opciones.password;
  */

  function saludar(opciones) {
    return "Hola, " + opciones.nombre;
  }

  saludar({ nombre: "Juan "}) // Hola, Juan

  // Defino una plantilla (o mejor llamada, Clase) Animal, que tiene un nombre
  function Animal(opciones) {
    // mi nuevo objeto, tiene un campo que se llama nombre.
    // a ese campo, le voy a asignar lo que sea que haya en el campo "a" de el parametro
    // opciones, que le pasé a esta funcion.
    this.nombre = opciones.a;
  }

  // Construyo un objeto, basado en la clase Animal.
  const perro = new Animal({
    a: 'Juan',
  })

  console.log(perro.a) // undefined
  console.log(perro.nombre) // Juan
  return nuevoUsuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return "Hello World!";
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    var resultado = "";
    for (let i = this.length - 1; i >= 0; i--) {
      //esto se puede hacer =  return this.split("").reverse().join("");
      resultado += this[i];
    }
    return resultado;
  };
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: {
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Guitarras {
  constructor(opciones) { // esto es como si fuera una funcion
    this.nombre = opciones.nombre;
    this.edad = opciones.edad;

    // las funciones, en vez de escribirlas con la mierda del protype, las podes escribir asi:
    this.metodo = function () {
      return "hola" + this.nombre;
    }
  }
}

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.detalle = function () {
      return {
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio,
      };
    };
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  const nuevapersona = new Persona(nombre, apellido, edad, dir);
  return nuevapersona;
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"

  // Para agregar un metodo a una funcion constructor,
  // Tenes que escribir:
  // NombreFuncionConstructor.prototype.nombreDelMetodo = function () {
  //    aca "this" es el objeto. Igual que el "this" en la funcion constructor.
  // }
  // Finalmente, para llamar al metodo, tenes que instanciar un objeto de esa clase.
  // e invocarlo objeto.nombreDelMetodo()

  Persona.prototype.datos = function () {
    return this.nombre + ", " + this.edad + " años";
  };

  const juan = new Persona({
    nombre: 'Juan',
    edad: '12',
  });

  juan.datos(); // Juan, 12 años.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
};
