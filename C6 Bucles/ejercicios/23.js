function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let x = 1
  let result = 0
  do {
    result = result + 5
    x = x + 1
  } while (x < 9);
  return result + num
}

module.exports = doWhile;