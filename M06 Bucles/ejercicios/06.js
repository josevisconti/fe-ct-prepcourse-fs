function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  switch (true) {
    case num >= 100 && num <= 999:
      return true;
    default:
      return false;
  }

}

module.exports = tieneTresDigitos;
