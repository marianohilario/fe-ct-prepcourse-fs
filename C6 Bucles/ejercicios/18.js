function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let result = 1
  for (let index = a; index <= b; index++) {
    result = Math.abs(result * index)
  }
  return result
}

module.exports = productoEntreNúmeros;