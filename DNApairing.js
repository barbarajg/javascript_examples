function pairElement(str) {
  let newPairs = [];
  for (let i=0; i<str.length; i++){
    switch (str.charAt(i)) {
      case 'G':
        newPairs.push(["G","C"])
        break;
      case 'A':
        newPairs.push(["A","T"])
        break;
      case 'T':
        newPairs.push(["T","A"])
        break;
      case 'C':
        newPairs.push(["C","G"])
        break;
    }
    console.log(newPairs);
  }
  return newPairs;
}