// how to get multiple number in
function multipleNbr(...numbers) {
  let sum = 0;
  for (i of numbers) {
    sum = sum + i;
  }
  return sum;
}

console.log(multipleNbr(10, 20, 30, 40, 50));
