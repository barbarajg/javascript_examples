// Fibonacci iterativo
function fibonacciA(limit){
	let numeros = [0,1];
	for(let i=2; i <= limit; i++){
		numeros.push(numeros[i-1] + numeros[i-2]);
		console.log(numeros[i]);	
	}
  return numeros;
}

// Fibonacci iterativo 2
function fibonacciB(numero) {
    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    console.log(numeros);
    return numeros;
}

// Fibonacci recursivo
function recursiveFib(index=1) {
  if(index<3) return 1;
  return recursiveFib(index-1) + recursiveFib(index-2);
}

