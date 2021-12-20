//Find minimum number in jfunction

function findMinValue(...numbers) {
  let minNum = Infinity;
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }
  return minNum;
}
console.log(findMinValue(10, 20, 50, 60, 2));
