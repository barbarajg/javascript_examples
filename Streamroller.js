function steamrollArray(arr) {
  let resultado = [];
  // Recorre el array
  for (let i=0; i<arr.length; i++){
    // Si el elemento es un array
    if(Array.isArray(arr[i])){
      // vuelve a llamar la función sobre el elemento
      // y añade el contenido al resultado
      resultado.push(...steamrollArray(arr[i]));
    } else {
      // Si el elemento no es un array,
      // lo añade al resultado
      resultado.push(arr[i]);       
    }    
  }
  return resultado;
}

steamrollArray([1, [2], [3, [[4]]]]);