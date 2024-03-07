function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  const fechaNacimientoObj = new Date(fechaNacimiento);
  
  const fechaActual = new Date();
  
  const diferencia = fechaActual - fechaNacimientoObj;
  
  const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  
  if (edad >= 18) {
    return true;
  } else {
    return false
  }

}

module.exports = esMayorDeEdad;