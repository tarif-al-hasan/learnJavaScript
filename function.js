//Arrow Function

const ArrowFun = (name) => {
  return name;
};
console.log(ArrowFun("Tarif Al Hasan 1"));

// Dynamic Function

const dynamicFun = function (nam) {
  return nam;
};
console.log(dynamicFun("Tarif Al Hasan 2"));

// JavaScript Anonymous Functions

const Anonymous = function (name) {
  return name;
};
console.log(Anonymous("Tarif Al Hasan 3"));

// JavaScript rest operator function expressiton

const getName = (...numbers) => {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  return sum;
};
console.log(getName(10, 20, 30));
