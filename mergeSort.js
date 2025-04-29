function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  let toSortLeft = arr.slice(0, mid);
  let toSortRight = arr.slice(mid);

  toSortLeft = mergeSort(toSortLeft);
  toSortRight = mergeSort(toSortRight);

  let sorted = [];
  let left = 0;
  let right = 0;

  while (sorted.length !== arr.length) {
    if (
      toSortLeft[left] < toSortRight[right] ||
      toSortRight[right] === undefined
    ) {
      sorted.push(toSortLeft[left]);
      left++;
    } else {
      sorted.push(toSortRight[right]);
      right++;
    }
  }

  return sorted;
}

console.log(mergeSort([6, 5, 8, 3, 4, 1, 7, 2]));
console.log(
  mergeSort([
    87, 9, 37, 59, 79, 6, 17, 98, 5, 84, 3, 36, 73, 22, 19, 93, 66, 32, 81, 53,
    13, 44, 4, 31, 90, 28, 38, 76, 27, 25, 10, 56, 21, 85, 20, 50, 41, 70, 86,
    77, 62, 7, 45, 16, 88, 89, 35, 80, 39, 97, 43, 8, 24, 11, 95, 58, 47, 65,
    40, 67, 1, 34, 96, 2, 99, 92, 100, 15, 26, 33, 18, 60, 71, 52, 12, 63, 64,
    72, 29, 68, 55, 14, 94, 23, 30, 48, 51, 42, 49, 61, 75, 74, 46, 91, 83, 78,
    69, 57, 82, 54,
  ])
);

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))

