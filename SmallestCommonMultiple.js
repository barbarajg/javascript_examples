function smallestCommons(arr) {
  //order our array so we know which number is smallest and which is largest
  // Ordena el array para saber qué número es el mínimo y cuál es el máximo
  let sortedArr = arr.sort(sortNumber),
  //the smallest common multiple that leaves no remainder when divided by all the numbers in the range
  // El mínimo común múltiplo es el que no deja resto al dividirlo por todos los números en el rango
  smallestCommon = 0,
  //smallest multiple will always be the largest number * 1;
  // El mínimo común múltiplo siempre será el número más grande del rango * 1
  multiple = sortedArr[1];

  while(smallestCommon === 0) {
    //check all numbers in our range
    // Revisa todos los números en el rango
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++ ){
      if(multiple % i !== 0 ){
        //if we find even one value between our set that is not perfectly divisible, we can skip to the next multiple
        // Si encuentra un valor que no es perfectamente divisible, pasamos al siguiente múltiplo
        break;
      }
      //if we make it all the way to the last value (sortedArr[1]) then we know that this multiple was perfectly divisible into all values in the range
      // Si llegamos hasta el último valor (sortedArr[1]), entonces este múltiplo es perfectamente divisible entre todos los valores del rango
      if(i == sortedArr[1]){
        smallestCommon = multiple;
      }
    }

    //move to the next multiple, we can just add the highest number.
    // Pasamos al siguiente múltiplo, añadiendo el número más alto
    multiple += sortedArr[1];
  }

  console.log(smallestCommon);
  return smallestCommon;
}

function sortNumber(a, b) {
    return a - b;
}

smallestCommons([1,5]);
smallestCommons([2,8]);
