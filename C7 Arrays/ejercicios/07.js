function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  const long = array.length;
  
  for (let i = 0; i < long - 1; i++) {
    for (let j = 0; j < long - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array
}

module.exports = ordenarArray;
