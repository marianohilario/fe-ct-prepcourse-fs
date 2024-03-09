function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  switch (arguments.length) {
    case 0:
      return 0;
    case 1:
      return arguments[0];
    default:
      let result = 1
      for (let index = 0; index < arguments.length; index++) {
        result = result * arguments[index];
      }
    return result
  }
}

module.exports = multiplicarArgumentos;
