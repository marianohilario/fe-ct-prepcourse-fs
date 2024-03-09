function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let total = 0
  const largo = objetoUsuario.posts.length
  for (let index = 0; index < largo; index++) {
    const likes = objetoUsuario.posts[index].likes
    total = likes + total
  }
  return total
}

module.exports = sumarLikesDeUsuario;
