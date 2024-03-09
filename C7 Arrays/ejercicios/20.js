function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  const value = array[0]
  const long = array.length
  if (long === 0) {
    return true
  }
  for (let index = 0; index < long; index++) {
    if (array[index] !== value) {
      return false
    }
  }
  return true
}

module.exports = todosIguales;
