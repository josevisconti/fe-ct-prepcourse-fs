function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
    var partesFecha = fecha.split('-');
    var año = +partesFecha[0], mes = +partesFecha[1], dia = +partesFecha[2];
    var fechaValida = partesFecha.length === 3 && !isNaN(año) && !isNaN(mes) && !isNaN(dia) &&
                      año >= 0 && mes >= 1 && mes <= 12 && dia >= 1 &&
                      dia <= new Date(año, mes - 1, 0).getDate();
    return fechaValida;
}

module.exports = esFechaValida;