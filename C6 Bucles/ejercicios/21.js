function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let aux = numero / 2
  while (aux > 1) {
    aux = aux /2
  }
  if (aux === 1) {
    return  true
  } else {
    return  false
  }
}

module.exports = esPotenciaDeDos;
