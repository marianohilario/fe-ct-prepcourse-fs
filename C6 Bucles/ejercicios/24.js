function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let largo = texto.length
   let result = ''
   for (let index = largo - 1; index >= 0; index--) {
      result = result + texto[index]
   }
   return result
}

module.exports = invertirTexto;
