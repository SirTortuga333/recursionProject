function largestPalindromeProduct(num1 = 999, num2 = 999) {
  if (num2 >= 100) {
    let product = num1 * num2;
    product = product.toString();
    reversed = Array.from(product).reverse().join("");

    if (product === reversed) return `${num1} * ${num2}`;
    else return largestPalindromeProduct(num1, num2 - 1);
  }else{
    let product = num1 * num2;
    product = product.toString();
    reversed = Array.from(product).reverse().join("");

    if (product === reversed) return `${num1} * ${num2}`;
    else return largestPalindromeProduct(num1 - 1, num2 = 999);
  }
}

console.log(largestPalindromeProduct());
