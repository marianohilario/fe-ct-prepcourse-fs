function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const newArray = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      newArray.push(array[index])
    }
  }
  return newArray
}

module.exports = filtrarNumerosPares;
