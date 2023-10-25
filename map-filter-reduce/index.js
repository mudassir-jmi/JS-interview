// ! map filter and reduce
// ? what is map : Map method is used for creating a new array from existing one by applying a function to each one of the element of the first array. map returns new array

// Example
const num = [1, 2, 3, 4, 5];
const mulTwo = num.map((num, i, arr) => {
  return num * 2;
});
console.log(mulTwo);

// ! Filter Method

// ? what is filter : Filter method takes each element in an array and it applies a conditional statement against it if the condition returns true element gets pushed into the output array if the condition returns false the element does not get pushed into the output array

// ? filter returns only those elements from the array which fulfills the provided criteria

const nums = [10, 40, 3, 20, 50];
const moreThanTen = nums.filter((num) => {
  return num > 10;
});
console.log(moreThanTen);

// ! reduce method : reduce method reduces an array of values down to just one value

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr, i, arr) => {
  return acc + curr; // that's means previous value + current value
}, 0); // previous value is 0 and the current value is current array[1,2,3,4]

// 👉 if you not assign initial value that's mean 0 it's take first element of array as a initial value
console.log(sum);

// acc = accumulator , curr = current value , i = index , arr = array

// ###########################################   **************************

// lets start polyfill of map, filter, reduce

// ! Polyfill for map()

// Array.map((num, i, arr) => { })

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
}; // this is custom map function below the example of custom map 👇

const customMap = [1, 2, 3, 4, 5];
const mulThree = num.myMap((custom, i, arr) => {
  return custom * 3;
});
console.log(mulThree);

// ! Polyfill for filter() 👇

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
}; // this is custom filter function below the example of custom filter 👇

const customFilter = [10, 40, 3, 20, 50];
const moreThanThree = customFilter.myFilter((num) => {
  return num > 3;
});
console.log(moreThanThree);

// ! Polyfill for reduce() 👇
// arr.reduce((acc,curr,i,arr) => {}, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

// ! Example of custom reduce function 👇

const customReduce = [1, 2, 3, 4, 5];
const multiply = customReduce.myReduce((acc, curr, i, arr) => {
  return acc * curr;
});

console.log(multiply);
