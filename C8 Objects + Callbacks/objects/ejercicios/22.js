function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   const str1Normalized = str1.toUpperCase()
   const str2Normalized = str2.toUpperCase()
   
   const str1Sorted = str1Normalized.split('').sort().join('')
   const str2Sorted = str2Normalized.split('').sort().join('')

   return   str1Sorted === str2Sorted
}

module.exports = esAnagrama;
