// Returns the sum of all prime numbers less than or equal to num
function sumPrimes(num) {
  let suma = 0;
  for (let i=2; i<=num; i++){
    if(esPrimo(i) === true){
      suma = suma + i;
    }
  }
  console.log("SUMA: " + suma);
  return suma;
}

// Checks if a number is a prime number
function esPrimo(num) {
  // Probamos si es divisible por cada número hasta su raíz cuadrada
   for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i == 0)
      return false;
    }
  return true;
}

sumPrimes(10);
sumPrimes(977);
