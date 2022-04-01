function myReplace(str, before, after) {
  
  let indice = str.indexOf(before);
  let letra = str.charAt(indice);
  let newAfter = "";
  let newStr = "";

  if(letra.toUpperCase() === letra){
    newAfter = after.replace(after.charAt(0), (after.charAt(0)).toUpperCase());
    newStr = str.replace(before, newAfter);
    console.log(newStr);
  } else {
    newAfter = after.replace(after.charAt(0), (after.charAt(0)).toLowerCase());
    newStr = str.replace(before, newAfter);
  }  
  return newStr;
}