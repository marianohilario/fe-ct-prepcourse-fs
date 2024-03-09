function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] * index
  }
  return array
}

module.exports = multiplicarElementosPorIndice;
