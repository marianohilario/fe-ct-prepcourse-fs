function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let random = Math.floor(Math.random() * array.length)
   if (array.length === undefined) {
      return undefined
   } else {
      return array[random]
   }
}

module.exports = obtenerElementoAleatorio;
