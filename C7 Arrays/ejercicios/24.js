function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  const newArray = []
  for (let index = 1; index < 10; index++) {
    let valor = num + 2 * index
    newArray.push(valor)
  }
  return  newArray
}

module.exports = continueStatement;
