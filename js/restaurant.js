var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
  this.id = id;
  this.nombre = nombre;
  this.rubro = rubro;
  this.ubicacion = ubicacion;
  this.horarios = horarios;
  this.imagen = imagen;
  this.calificaciones = calificaciones;
}

function sumatoria(arreglo) {
  return arreglo.reduce((a, b) => a + b);
}

function promedio(arreglo) {
  var promedio = sumatoria(arreglo) / arreglo.length;
  return Math.round(promedio * 10) / 10;

}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
  var horarioFiltrado = this.horarios.filter(h => h != horarioReservado);
  this.horarios = horarioFiltrado;
  return horarioFiltrado;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
  if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 11) {
    this.calificaciones.push(nuevaCalificacion);
  }
}

Restaurant.prototype.obtenerPuntuacion = function() {
  if (this.calificaciones.length === 0) {
    return 0;
  } else {
    return promedio(this.calificaciones);
  }
}
