function dropElements(arr, func) {
  // Mientras haya elementos en el array y la función no se cumpla,
  //quita el primer elemento
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  console.log(arr);
  return arr;
}
//dropElements([1, 2, 3], function(n) {return n < 3; });
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
dropElements([0, 1, 0, 1], function(n) {return n === 1;})
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})