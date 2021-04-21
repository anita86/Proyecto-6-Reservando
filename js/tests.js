let expect = chai.expect;

describe('Testeo reservarHorario()', function() {

  //Requerimiento 1: Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.
  it('Al reservar un horario del restaurant, la longitud del arreglo disminuye en 1', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var horariosAntesDeReserva = RestaurantTest.horarios.length;
    RestaurantTest.reservarHorario("20:00")
    expect(RestaurantTest.horarios.length).to.equal(horariosAntesDeReserva - 1);
  })

  it('Al reservar un horario del restaurant, esa hora se elimina del arreglo', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    RestaurantTest.reservarHorario("22:00")
    expect(RestaurantTest.horarios.length).to.equal(2);
  })

  //Requerimiento 2: Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.
  it('Al reservar un horario del restaurant no disponible, el arreglo se mantiene igual / comparo longitud de array Horarios', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var horariosAntesDeReserva = RestaurantTest.horarios.length;
    RestaurantTest.reservarHorario("22:30")
    expect(RestaurantTest.horarios.length).to.equal(3);
  })

  it('Al reservar un horario del restaurant no disponible, el arreglo se mantiene igual / comparo valores de objeto', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    RestaurantTest.reservarHorario("22:30")
    expect(RestaurantTest.horarios).to.eql(["20:00", "21:30", "22:00"]);
  })

  //Requerimiento 3: Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.
  it('Al no ingresar un horario de reserva, el arreglo se mantiene igual', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var horariosAntesDeReserva = RestaurantTest.horarios.length;
    RestaurantTest.reservarHorario()
    expect(RestaurantTest.horarios.length).to.equal(3);
  })

})

describe('Testeo obtenerPuntuación()', function() {

  //Requerimiento 1: Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.
  it('Al consultar calificación de restaurant, el promedio devuelto es correcto', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var sumaDeCalificaciones = 0;
    for (var i = 0; i < RestaurantTest.calificaciones.length; i++) {
      sumaDeCalificaciones += RestaurantTest.calificaciones[i]
    }
    var promedioCalificaciones = sumaDeCalificaciones / RestaurantTest.calificaciones.length;
    expect(promedioCalificaciones).to.equal(7);
  })
  // Requerimiento 2: Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.
  it('El restaurant no ha sido calificado aun', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", []);
    expect(RestaurantTest.calificaciones.length).to.equal(0);
  })

})

describe('Testeo calificar()', function() {

  //Requerimiento 1: Si la calificación ingresada por usuario es un Número se agrega al array / array.length aumenta en 1.
  it('Si la calificación ingresada por usuario es un número, se agrega al array ', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var calificacionesAntesDeCalificacionNueva = RestaurantTest.calificaciones.length;
    RestaurantTest.calificar(8)
    expect(RestaurantTest.calificaciones.length).to.equal(calificacionesAntesDeCalificacionNueva + 1);
  })

  //Requerimiento 2: Si la calificación ingresada por usuario no es válida ( 0 > calificación > 10 ) no se agrega al array / array.length se mantiene igual.
  it('Si la calificación ingresada por usuario es menor a 0, no se agrega al array ', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var calificacionesAntesDeCalificacionNueva = RestaurantTest.calificaciones.length;
    RestaurantTest.calificar(-1)
    expect(calificacionesAntesDeCalificacionNueva).to.equal(RestaurantTest.calificaciones.length);
  })

  //Requerimiento 3: Si la calificación ingresada por usuario no es válida ( 0 > calificación > 10 ) no se agrega al array / array.length se mantiene igual.
  it('Si la calificación ingresada por usuario es mayor a 10, no se agrega al array ', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var calificacionesAntesDeCalificacionNueva = RestaurantTest.calificaciones.length;
    RestaurantTest.calificar(11)
    expect(calificacionesAntesDeCalificacionNueva).to.equal(RestaurantTest.calificaciones.length);
  })

  //Requerimiento 4: La calificación ingresada por usuario es vacía () y no se agrega al array / array.length se mantiene igual.
  it('Si la calificación ingresada por usuario es vacía (), no se agrega al array ', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var calificacionesAntesDeCalificacionNueva = RestaurantTest.calificaciones.length;
    RestaurantTest.calificar()
    expect(calificacionesAntesDeCalificacionNueva).to.equal(RestaurantTest.calificaciones.length);
  })

  //Requerimiento 5: La calificación ingresada por usuario es un string no se agrega al array / array.length se mantiene igual.
  it('Si la calificación ingresada por usuario es vacía (), no se agrega al array ', function() {
    var RestaurantTest = new Restaurant(25, "Test", "Desayuno", "Buenos Aires", ["20:00", "21:30", "22:00"], "img/desayuno2.jpg", [9, 6, 7, 6, 7]);
    var calificacionesAntesDeCalificacionNueva = RestaurantTest.calificaciones.length;
    RestaurantTest.calificar("bueno")
    expect(calificacionesAntesDeCalificacionNueva).to.equal(RestaurantTest.calificaciones.length);
  })

})

describe('Testeo buscarRestaurante(id)', function() {

  //Requerimiento 1: Búsqueda por id >> devuelve el restaurante del listado que posee ese id.
  it('Busco Restaurante con ID incluido en el listado. Comparo propiedades "nombre" y "ID', function() {
    var restauranteBuscado = listado.buscarRestaurante(1);
    expect(restauranteBuscado).to.have.property("nombre", "TAO Uptown");
    expect(restauranteBuscado).to.have.property("id", 1);
  })

  //Requerimiento 2: Id ingresado no existe en listado de restaurantes
  it('Busco Restaurante con ID inexistente en el listado: inválido', function() {
    var restauranteBuscado = listado.buscarRestaurante(500);
    expect(restauranteBuscado).to.equal('No se ha encontrado ningún restaurant')
  })

  //Requerimiento 3: Id ingresado no existe en listado de restaurantes
  it('Busco Restaurante por nombre (string): inválido', function() {
    var restauranteBuscado = listado.buscarRestaurante("TAO");
    expect(restauranteBuscado).to.equal('No se ha encontrado ningún restaurant')
  })

})

//Testeá la función obtenerRestaurantes()
describe('Testeo Obtener Restaurantes()', function() {

  it('Busca Restaurantes solo por rubro', function() {
    var arregloFiltrado = listado.obtenerRestaurantes("Desayuno", null, null);
    expect(arregloFiltrado.length).to.equal(4);
  })

  it('Busca Restaurantes solo por ciudad', function() {
    var arregloFiltrado = listado.obtenerRestaurantes(null, "Roma", null);
    expect(arregloFiltrado.length).to.equal(2);
  })

  it('Busca Restaurantes solo por horario', function() {
    var arregloFiltrado = listado.obtenerRestaurantes(null, null, "13:00");
    expect(arregloFiltrado.length).to.equal(3);
  })

  it('Busca Restaurantes sin usar filtros. Retorna listado completo', function() {
    var arregloFiltrado = listado.obtenerRestaurantes(null, null, null);
    expect(arregloFiltrado.length).to.equal(24);
  })

})

//Testeo de funcionalidades de objeto Reserva
describe('Testeo precioBase() de Reserva', function() {

  // Requerimiento 1:	Que un restaurante calcule correctamente su precio base.
  it('Calcula correctamente precio de la reserva', function() {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
    expect(reservaTest.precioBase()).to.equal(2800);
  })

  // Requerimiento 2:	Si cantidad de personas es cero, el precioBase es cero
  it('No permite cantidadPersonas = 0', function() {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), 0, 350, "DES1");
    expect(reservaTest.precioBase()).to.equal(0);
  })

  // Requerimiento 3:	Si cantidad de personas es número negativo, la función no corre
  it('No permite números negativos en cantidadPersonas', function() {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), -1, 350, "DES1");
    expect(reservaTest.precioBase()).to.equal("Cantidad de personas es inválida");
  })

  // Requerimiento 4:	Si cantidad de personas es un string, la función no corre
  it('No permite string en cantidadPersonas', function() {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), "dos", 350, "DES1");
    expect(reservaTest.precioBase()).to.equal("Cantidad de personas es inválida");
  })
})

describe('Testeo precioFinal() de Reserva', function() {
  // Requerimiento 2:	Que un restaurante calcule correctamente su precio final, contemplando bien los descuentos y los adicionales.
  it('Calcula correctamente precio de la reserva', function() {
    var reservaTest = new Reserva(new Date(2018, 7, 27, 14, 00), 2, 150, "DES200");
    //precio base= 300; descuento= 200; adicional por hora pico= 5; adicional por viernes= 10.
    expect(reservaTest.precioFinal()).to.equal(115);
  })

})

describe('Testeo calcularDescuentos() de Reserva', function() {

  it('Calcula correctamente descuentos', function() {
    var reservaTest = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
    var reservaTest2 = new Reserva(new Date(2018, 7, 27, 14, 00), 2, 150, "DES200");

    expect(reservaTest.calcularDescuentos()).to.equal(630);
    expect(reservaTest2.calcularDescuentos()).to.equal(200);

  })
})
