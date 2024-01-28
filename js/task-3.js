// function filterArray(numbers, value) {
//   const myArr = numbers.filter(function (number) {
//     return number > value;
//   });
//   return myArr;
// }
// !Знаю що ми так не вчили але гарний спосіб!

function filterArray(numbers, value) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
