function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let result = ''
   let largo = Math.max(str1.length, str2.length, str3.length)
   for (let index = 0; index <= largo; index++) {
      if (str1.length > 0) {
         if (index <= str1.length-1) {
            result = result + str1[index]
         }
      }
      if (str2.length > 0) {
         if (index <= str2.length-1) {
            result = result + str2[index]
         }
      }
      if (str3.length > 0) {
         if (index <= str3.length-1) {
            result = result + str3[index]
         }
      }
   }
   return result
}

module.exports = combine;
