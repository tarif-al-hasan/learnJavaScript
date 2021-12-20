// find max value in js function

function findMaxValue(...numbers) {
  let maxNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
console.log(findMaxValue(10, 20, 50, 60));
