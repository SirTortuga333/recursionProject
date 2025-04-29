function fibs(num) {
  let counter = 0;

  let fibSecuence = [0, 1];

  for (let index = 2; index < num; index++) {
    fibSecuence.push(fibSecuence[index - 1] + fibSecuence[index - 2]);
  }

  return fibSecuence;
}

// console.log(fibs(8));

function fibsRec(num) {
  let secuence;
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  secuence = fibsRec(num - 1);
  if (secuence.length < num)
    secuence.push(
      secuence[secuence.length - 1] + secuence[secuence.length - 2]
    );

  return secuence;
}

console.log(fibs(8));
console.log(fibsRec(8));
