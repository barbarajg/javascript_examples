function findMatchingProperties(coleccion, abuscar) {
  let propiedades = Object.keys(abuscar);

  return coleccion.filter(obj => {
    for (let i=0; i<propiedades.length; i++) {
      if(!obj.hasOwnProperty(propiedades[i]) ||
      obj[propiedades[i]] !== abuscar[propiedades[i]]){
        return false;
      }
    }
    return true;
  });
}