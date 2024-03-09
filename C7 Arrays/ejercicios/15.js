function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let maxIndex = 0
  let maxNumber = array[0]
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxNumber) {
      maxIndex = index
      maxNumber = array[index]
    }
  }
  return  maxIndex
}

module.exports = encontrarIndiceMayor;
