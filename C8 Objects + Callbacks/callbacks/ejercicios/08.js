const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
        return array[index];
    }
}
return "No se encontró el elemento";
};

module.exports = buscarElemento;
