function convertHTML(str) {
  let caracteres = str.split(""); //Convierte a array de caracteres
  let newStr = "";
  // Recorre el array
  for (let i=0; i<caracteres.length; i++){
    switch(caracteres[i]){
      case "&":
        caracteres[i] = "&amp;";
        break;
      case "<":
        caracteres[i] = "&lt;";
        break;
      case ">":
        caracteres[i] = "&gt;";
        break;
      case '"':
        caracteres[i] = "&quot;";
        break;
      case "'":
        caracteres[i] = "&apos;";
        break;
    }
  }
  // Crea una nueva cadena uniendo los caracteres del array
  newStr = caracteres.join("");
  console.log(newStr);
  return newStr;
}

convertHTML("Dolce & Gabbana");