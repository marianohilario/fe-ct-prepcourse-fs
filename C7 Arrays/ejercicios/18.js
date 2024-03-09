function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let result = 0
  for (let index = 0; index < resultadosTest.length; index++) {
    result = result + resultadosTest[index]
  }
  return result / resultadosTest.length
}

module.exports = promedioResultadosTest;
