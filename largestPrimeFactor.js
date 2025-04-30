function largestPrimeFactor(number, prime = 2) {
  if (number === prime) return prime;

  if (number % prime === 0) return largestPrimeFactor(number / prime, prime);
  else return largestPrimeFactor(number, prime + 1);
}

console.log(largestPrimeFactor(600851475143));
