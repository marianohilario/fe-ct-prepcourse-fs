function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const newArray = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'Enero' || array[index] === 'Marzo' || array[index] === 'Noviembre') {
      newArray.push(array[index])
    }
  }
  if (newArray.includes('Enero') && newArray.includes('Marzo') && newArray.includes('Noviembre')) {
    return  newArray
  } else {
    return 'No se encontraron los meses pedidos'
  }
}

module.exports = mesesDelAño;
