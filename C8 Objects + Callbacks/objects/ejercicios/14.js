function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (Object.keys(objetoUsuario).includes('email')) {
    if (objetoUsuario.email === null) {
      return false
    }
    if (objetoUsuario.email.length > 0) {
      return true
    }
  } 
  return false
}

module.exports = tieneEmail;
