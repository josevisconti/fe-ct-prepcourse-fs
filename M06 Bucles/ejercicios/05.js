function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor === true || valor === "verdadero") {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

module.exports = esVerdadero;
