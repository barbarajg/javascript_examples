function fearNotLetter(str) {
  let current;
  let prev = 0;
  let letterCode;
  let letter = "";
  for(let i=0;i<str.length; i++){    
    current = str.charCodeAt(i);
    prev=current-1;
    //console.log(current);
    if((i !== 0) && (prev !== str.charCodeAt(i-1))){
      letterCode = prev;
      letter = String.fromCharCode(letterCode);
      current = str.charCodeAt(i);
      prev = str.charCodeAt(i);
    }
    if(!letter){
      letter = undefined;
    }
  }
  console.log(letter);
  return letter;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");