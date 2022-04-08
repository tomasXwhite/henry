function ejercicioA() {
  // Crees una funcion constructor, que funcione como "plantilla" de autos.
  // Agregale a la plantilla, los campos que consideres.
  // Después, crea una instancia de un auto, basado en esa plantilla.
  // Asegurate que el auto tenga una lista con los nombres de las personas que lo pueden manejar
  // Finalmente, mostra en pantalla, el objeto entero.

  // funcion constructor:
  function Autos(opciones) {
    this.puertas = opciones.puertas;
    this.color = opciones.color;
    this.marca = opciones.marca;
    this.personas = opciones.personas;
  }

  var nuevoauto = new Autos({
    puertas: 2,
    color: "rojo",
    marca: "vw",
    personas: ["tomas", "ramiro", "mariano"],
  });

  console.log(nuevoauto);
}

function ejercicioB() {
  // Crea una funcion constructor que represente guitarras.
  // Agregales los campos que consideres
  // La funcion constructor, tiene que tomar un solo parametro. Y las propiedades
  // de ese parametro, no pueden ser las mismas que la de la plantilla "Guitarra".
  // Recordá que las guitarras tienen un dueño, y el dueño tiene "nombre" y "apellido".
  // Despues, instanciá una guitarra que conozcas.
  // Finalmente, mostrala en pantalla.

  // El unico lugar donde usas this es aca.
  function Guitarras(parametros) {
    this.marca = parametros.mmarca;
    this.cuerdas = parametros.ccuerdas;
    this.valor = parametros.vvalor;
    this.color = parametros.ccolor;
    this.duenio = parametros.dduenio;
  }

  var nuevaguitarra = new Guitarras({
    mmarca: "chibson",
    ccuerdas: 12,
    vvalor: "$50000",
    ccolor: "rojo",
    dduenio: {
      nombre: "Tomas",
      apellido: "Olivera",
    },
  });
  console.log(nuevaguitarra);
}

function ejercicioC() {
  // Usando el mismo codigo que escribiste antes, quiero que le agregues
  // a la plantilla de "Guitarras", un metodo que devuelva el mensaje
  // "Tomas Olivera pago $50000 por la guitarra chibson".
  // Finalmente, quiero que muestres en pantalla, los dos mensajes.

  // El unico lugar donde usas this es aca.
  function Guitarras(parametros) {
    this.marca = parametros.mmarca;
    this.cuerdas = parametros.ccuerdas;
    this.valor = parametros.vvalor;
    this.color = parametros.ccolor;
    this.duenio = parametros.dduenio;
  }

  Guitarras.prototype.metodo = function() {
    return (
      this.duenio.nombre + " " + this.duenio.apellido + " pagó " + this.valor + " por la guitarra " + this.marca
    );
  };

  var nuevaguitarra = new Guitarras({
    mmarca: "chibson",
    ccuerdas: 12,
    vvalor: "$50000",
    ccolor: "rojo",
    dduenio: {
      nombre: "Tomas",
      apellido: "Olivera",
    },
  });
  console.log(nuevaguitarra.metodo());
}

function ejercicioD() {
  // Volvé a implementar lo que se pide en el ejercico C, pero en vez de usar
  // funciones constructoras (la funcion Guitarras) usa "clases" de ES6.

  class Guitarras{
    constructor(parametros) { // <- esto es como si fuera una funcion
      this.marca = parametros.marca;
      this.color = parametros.color;
      this.valor = parametros.valor;
      this.duenio= parametros.duenio; 
      this.metodo = function() { // <- Esto es literalmente iguala Guitarras.prototype.metodo = function () {...}
        return ( this.duenio.nombre + " " + this.duenio.apellido + " pagó " + this.valor + " por la guitarra " + this.marca)
      }
    }
  }

  var nuevaguitarra = new Guitarras({
    marca: "chibson",
    cuerdas: 12,
    valor: "$50000",
    color: "rojo",
    duenio: {
      nombre: "Tomas",
      apellido: "Olivera",
    },
  });
  console.log(nuevaguitarra.metodo());

} // <- Aca termina ejercicioD

// ejercicioA();
// ejercicioB();
// ejercicioC();
ejercicioD();
