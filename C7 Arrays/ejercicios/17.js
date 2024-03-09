function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let result = 0
  for (let index = 0; index < arrayOfNums.length; index++) {
    result = result + arrayOfNums[index]
  }
  return result
}

module.exports = agregarNumeros;
