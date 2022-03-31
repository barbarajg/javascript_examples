function spinalCase(str) {
  let cadena = [];
  let resultado = "";
  for(let i=0;i<str.length;i++){
    if(((str[i] === " ") || (str[i] === "_")) && i!=0){
         cadena.push('-');
    } else {      
      if((str[i] == str[i].toUpperCase()) && i!=0){
        cadena.push("-");
      }
      cadena.push(str[i].toLowerCase());
    }
  }
  // Revisa el array para que no haya guiones duplicados
  for (let i=0;i<cadena.length;i++){
    if((cadena[i] === "-") && (cadena[i+1] === "-")){
      cadena.splice(i,1);
    }
  }
  resultado = cadena.join("")  ;
  console.log(resultado);
  return resultado;
}