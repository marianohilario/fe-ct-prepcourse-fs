function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra.length > 1 || letra !== 'a' && letra !== 'e' && letra !== 'i' && letra !== 'o' && letra !== 'u' && letra !== 'A' && letra !== 'E' && letra !== 'I' && letra !== 'O' && letra !== 'U') {
    return 'Dato incorrecto'
  } else {
    return 'Es vocal'
  }
}

module.exports = esVocal;
