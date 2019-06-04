// Requerimiento 1:  Modelar el objeto Reserva
var Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento) {
  this.horario = horario;
  this.cantidadPersonas = cantidadPersonas;
  this.precioPersona = precioPersona;
  this.codigoDescuento = codigoDescuento;
}

// Requerimiento 2: Desarrollar la funcionalidad que calcule el precio base de una reserva
//El precio base de una reserva es igual a la cantidad de personas por el precio por persona.
Reserva.prototype.precioBase = function() {
  if (this.cantidadPersonas >= 0) {
    return this.cantidadPersonas * this.precioPersona;
  } else {
    return "Cantidad de personas es inválida";
  }
}

Reserva.prototype.calcularDescuentos = function() {
  var base = this.precioBase();
  var cantidad = this.cantidadPersonas;
  var codigo = this.codigoDescuento;
  var descuento = 0;

  if (cantidad >= 4 && cantidad <= 6) { // Para grupos entre 4 y 6 personas: 5% de descuento.
    descuento += base * 0.05;
  }
  if (cantidad >= 7 && cantidad <= 8) { //Para grupos entre de 7 y 8 personas: 10% de descuento
    descuento += base * 0.10;
  }
  if (cantidad >= 9 || codigo === 'DES15') { //Para grupos de más de 8 personas o codigo DES15: 15% de descuento
    descuento += base * 0.15;
  }
  if (codigo === 'DES200') { // DES200: obtiene $200 de descuento.
    descuento += 200;
  }
  if (codigo === 'DES1') { // DES1: se descuenta el valor equivalente al precio de una persona.
    descuento += this.precioPersona;
  }
  return descuento;
}

Reserva.prototype.calcularAdicionales = function() {
  var base = this.precioBase();
  var hora = this.horario.getHours();
  var dia = this.horario.getDay();
  var adicional = 0;

  switch (dia) { // Reserva para días viernes, sábado o domingo: se adiciona un 10%
    case 0:
    case 5:
    case 6:
      adicional += base * 0.10;
  }

  switch (hora) { // Reserva para las 13, 14, 20 y 21hs: se adiciona un 5%
    case 13:
    case 14:
    case 20:
    case 21:
      adicional += base * 0.05;
  }

  return adicional;
}

//3-Desarrollar la funcionalidad que calcule el precio total de una reserva: Precio final = precio base + adicionales - descuentos
Reserva.prototype.precioFinal = function() {
  return this.precioBase() + this.calcularAdicionales() - this.calcularDescuentos();
}
