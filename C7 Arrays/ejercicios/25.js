function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let contador = 0
  for (let index = 0; index < numeros.length; index++) {
     if (numeros[index] % 2 === 0) {
      contador++
     } else {
      continue
     }
  }
  return  contador
}

module.exports = contarParesConContinue;
