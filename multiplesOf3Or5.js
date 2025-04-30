function multipleOf(number) {

    console.log(number)
  if (number <= 0) return 0;

  let total = 0;

  if (number % 3 === 0 || number % 5 === 0) {
    total += number;
  }

  return total+ multipleOf(number - 1)
}

console.log(multipleOf(1000));
