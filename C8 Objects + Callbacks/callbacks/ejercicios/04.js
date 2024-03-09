function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let total = 0
   for (let index = 0; index < arrayOfNumbers.length; index++) {
      total = total + arrayOfNumbers[index]
   }
   cb(total)
}

module.exports = sumarArray;
