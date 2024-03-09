function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const resultante = array.map(e => e.toUpperCase())
  return resultante
}

module.exports = convertirStringAMayusculas;
