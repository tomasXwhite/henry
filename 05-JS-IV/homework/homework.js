// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad nomb"re" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };
  return gato;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return objeto;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  return usuario.email ? true : false; //ternario, un alternativo al condicional if. Siestoesverdadero ? hazesto : sinohazesto
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto.hasOwnProperty(propiedad)) {
    //objeto.hhasOwnProperty[propiedad]
    return true;
  } else return false;
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario.password === password ? true : false; //si son iguales que me devuelva true sino false
} // el "password es algo que ya esta dicho, pero el usuario es lo que envia el usuario, entonces preguntamos lo que hay dentro de password coincide con lo que pone en usuario"

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword; //cambiamos el valor no el atributo
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

  /*
  sobre listas:

  const lista = []; // const es "parecido a" var, pero no te deja sobreescribir
  lista.push(2);
  // lista es [2]
  lista.push(3);
  // lista es [2, 3]
  lista = [5] // esto no se puede, porque "const" no te deja sobreescribir

  sobre objetos:

  // esto lo podes hacer, pero es medio feo, porque "nombre" y "edad" estan como
  // fuera de contexto
  const nombre = 'tomas';
  const edad = 43;

  // un objeto (que representa a un usuario, en este caso), TIENE nombre, edad,y
  // cualquier otro campo que quieras
  const usuario = {
    nombre: 'tomas',
    edad: 43,
    altura: 170,
    amigos: [],
    ...
  };

  usuario.edad = 18; // esto lo podes hacer AUNQUE hayas hecho "const usuario".
  usuario = {} // esto NO lo podes hacer, porque dijiste "const usuario"

  console.log(usuario.nombre) // esto muestra en pantalla "tomas"
  
  usuario.amigos.push('juan');
  console.log(usuario.amigos) // esto muestra en pantalla ["juan"];
  console.log(usuario); // esto muestra en pantalla: { nombre: 'tomas', ..., amigos: ['juan'] }

  // sin usar objetos
  function saludar(edad, altura, nombre) { // <- Esto se llama signature de una funcion (los parametros que recibe)
    // deberia devolver esto:
    // "Hola NOMBRE, de X años, y Y altura."
    return `Hola ${nombre}, de ${edad} años, y ${altura}` // esto `` es igual a "" o a '', PERO te deja "INTERPOLAR" valores entre ${}.
  }

  // con objetos
  function saludar(usuario) {
    return `Hola ${usuario.nombre}, de ${usuario.edad}, y ${usuario.altura}`;
  }


  */
  console.log(`Hola ${nuevoAmigo}`); // equivalente a console.log("Hola " + nuevoAmigo);
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    // usuarios = [{ nombre: 'juan' }, { nombre: 'tomas' }]
    // usuarios[0] es juan
    // usuarios[1] es tomas
    // usuarios[i] es el que este en la posicion i
    usuarios[i].esPremium = true; // para cada usuario, setea esPremium en "true"
    // usuarios = [{ nombre: 'juan', esPremium: true }, { nombre: 'tomas', esPremium: true }]
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var total = 0;
  for (let i = 0; i < usuario.posts.length; i++) {
    total = total + usuario.posts[i].likes;
  }
  return total;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function () {
    return producto.precio - producto.precio * producto.porcentajeDeDescuento;
  };

  // ahora, puedo hacer:
  // product.calcularPrecioDescuento(); y esto va a devolver un

  // La funcion agregarMetodoCalculoDescuento(producto) devuelve el mismo producto, con un metodo nuevo (calcularPrecioDescuento).
  // La funcion producto.calcularPrecioDescuento devuelve un numero, el precio con el descuento aplicado.

  /*
  const producto = {
    precio: 20,
    porcentajeDeDescuento = 0.2,
  }

  agregarMetodoCalculoDescuento(producto);

  const precioConDescuento = producto.calcularPrecioDescuento();
  console.log(precioConDescuento) // esto devuelve 16 (el precio, con el descuento aplicado)
  */

  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
