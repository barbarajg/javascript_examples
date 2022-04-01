function sumFibs(num) {
  let res = 0;
  let anterior = 0;
  let actual = 1;

  while(actual <= num){
    if(actual%2 !== 0){
      res += actual;
    }
    actual += anterior;
    anterior = actual - anterior;
  }
  console.log(res);
  return res;
}

sumFibs(1);
sumFibs(10);
sumFibs(1000);