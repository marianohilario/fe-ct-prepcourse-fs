function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      if (num === array[index]) {
         return index
      }
   }
   return -1
}

module.exports = encontrarElemento;
