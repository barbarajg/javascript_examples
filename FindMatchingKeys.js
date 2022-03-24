function whatIsInAName(collection, source) {
  let propiedades = Object.keys(source); //Guarda las propiedades  del objeto source

  return collection.filter(obj => { // Itera el array collection 
    // Por cada elemento en collection hasta la longitud de propiedades
    for (let i=0; i<propiedades.length;i++) {
      // Si el elemento no tiene la propiedad en propiedades ni en source devuelve false, y si no true
      if(!obj.hasOwnProperty(propiedades[i]) || 
        obj[propiedades[i]] !== source[propiedades[i]]){
          return false;
        }
    }
    return true;
  });
}
