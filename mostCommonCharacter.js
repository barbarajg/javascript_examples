function mostCommonCharacter(str) {
  const charHolder = {}; // { a: 1, b: 3, c: 1, d: 2, e: 1, f: 3, g: 1 }
  let highest_num = 0;
  let res = '';
  str
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (char != " ") {
        if (charHolder[char] == null) {
          charHolder[char] = 1;
        } else {
          charHolder[char] += 1;
        }
      }
    });
  
  for (const key in charHolder) {
    if (charHolder[key] > highest_num) {
      highest_num = charHolder[key];
    }
  }
  
  for(let k in charHolder){
    if(charHolder[k] === highest_num){
      res += k;
    }
  }
  return res;
}

console.log(mostCommonCharacter("abbbcddefffg"))