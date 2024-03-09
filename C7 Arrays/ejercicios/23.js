function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  const newArray = []
  for (let index = 1; index <= 10; index++) {
    let valor = num + 2 * index
    if (valor === index) {
      return 'Se interrumpió la ejecución'
    } else {
      newArray.push(valor)
    }
  }
  return  newArray
}

module.exports = breakStatement;
