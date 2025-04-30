function evenFibonacci(num1 = 0, num2 = 1, total = 0) {
  if (num2 > 4000000) return total;

  if (num2 % 2 === 0) {
    total += num2
  }

  return evenFibonacci(num2, num1+num2, total)
}

console.log(evenFibonacci());
