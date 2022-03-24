function sumAll(arr) {
  let resultado = 0;
  let x;
  let y;
  if(arr[0] <= arr[1]){
    x = arr[0];
    y = arr[1];
  } else {
    x = arr[1];
    y = arr[0];
  }
  for(let i=x; i<=y; i++){
    resultado = resultado+i;
  }
  return resultado;
}
