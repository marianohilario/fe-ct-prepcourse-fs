function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const newArray = []
   for (let index = 0; index < arrayOfStrings.length; index++) {
      if (arrayOfStrings[index][0] === 'a') {
         newArray.push(arrayOfStrings[index])
      }
   }
   return   newArray
}

module.exports = filter;
