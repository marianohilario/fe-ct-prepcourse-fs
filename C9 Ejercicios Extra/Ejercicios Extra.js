/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const newArray = []
  for (const key in objeto) {
    newArray.push([key,objeto[key]])
  }
  return  newArray
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const object = {}
  for (let index = 0; index < string.length; index++) {
    const arrObjKeys = Object.keys(object)
    const element = string[index];
    if (arrObjKeys.includes(element)) {
      object[element] = object[element] + 1
    } else {
      object[element] = 1
    }
  }
  return object
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayus = []
  let minus = []
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (/^[A-Z]$/.test(element)) {
      mayus.push(element)
    } else {
      minus.push(element)
    }
  }
  return  mayus.join('') + minus.join('')
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  const arrFrase = frase.split(' ')
  const arrInverso = []
  for (let index = 0; index < arrFrase.length; index++) {
    const element = arrFrase[index];
    arrInverso.push(element.split('').reverse().join(''))
  }
  return  arrInverso.join(' ')
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const numberToString = numero.toString()
  const invertedNumber = numberToString.split('').reverse().join('')
  if (numberToString === invertedNumber) {
    return 'Es capicua'
  }
  return 'No es capicua'
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const newArray = []
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element.toLowerCase() !== 'a' && element.toLowerCase() !== 'b' && element.toLowerCase() !== 'c') {
      newArray.push(element)
    }    
  }
  return  newArray.join('')
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  const long = arrayOfStrings.length - 1
  for (let index = 0; index < long; index++) {
    for (let j = 0; j < long - index; j++) {
      if (arrayOfStrings[j].length > arrayOfStrings[j + 1].length) {
        const temp = arrayOfStrings[j];
        arrayOfStrings[j] = arrayOfStrings[j + 1];
        arrayOfStrings[j + 1] = temp;
      }
    }
  }
  return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  const newArray = []
  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (array2.includes(element)) {
      newArray.push(element)
    }
  }
  return  newArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
