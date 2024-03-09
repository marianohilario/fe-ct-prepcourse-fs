const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  const props = []
  for (const key in objeto) {
    props.push(key)
  }
  return  props.length
};

module.exports = contarPropiedades;
