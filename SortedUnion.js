function uniteUnique(arr) {
  let newArr = [];
  for (let i=0; i<arguments.length; i++){
    for(let elem in arguments[i]){
      let elemento = arguments[i][elem];
      if(!newArr.includes(elemento)){
        newArr.push(elemento);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
uniteUnique([1, 3, 2], [5, 4], [5, 6]);
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);