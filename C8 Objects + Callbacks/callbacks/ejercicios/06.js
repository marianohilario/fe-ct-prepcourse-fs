function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  const newArray = []
  for (let index = 0; index < array.length; index++) {
    const value = cb(array[index])
    newArray.push(value)
  }
  return newArray
}

module.exports = map;
