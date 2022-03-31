function translatePigLatin(str) {
  let resultado = "";
  let vocales = ["a","e","i","o","u"];
  let consonantes;
  let inicio = 0;
  let final = 0;
  // Si empieza por vocal
  if(vocales.includes(str[0])){
    resultado = str + "way";
  } else {
    // Si empieza por consonante
    for(let i=0; i<str.length; i++){
      if(!vocales.includes(str[i])){ //Si es consonante
        final = i+1;        
      } else { // Si es vocal
        break;
      } 
    }  
    consonantes = str.substring(inicio, final);  
    resultado = str.substring(final) + consonantes + "ay";
  }
  
  console.log(resultado);
  return resultado;
}
