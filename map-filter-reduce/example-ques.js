// ! Ques1: map vs forEach

const array = [2, 5, 8, 9, 1];

const mapResult = array.map((arr) => {
  return arr + 2;
});

console.log(mapResult);

const forEachResult = array.forEach((arr) => {
  return arr + 2;
});

console.log(forEachResult);

//  in map function we can chain other method also but in forEach can't chain other method because forEach does't return anything

// const mapResult1 = array
//   .map((arr) => {
//     return arr + 2;
//}).filter(); // this is chain use in map but not use in forEach

// ! Ques2: Return only name of students in Capital

let students = [
  { name: "Mudassir", roll: 20, age: 23 },
  { name: "Akhter", roll: 10, age: 28 },
  { name: "Max", roll: 12, age: 30 },
  { name: "Jhon", roll: 30, age: 69 },
];

// using for loop 👇

let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

// Using Map function 👇

const filterUpper = students.map((stu) => {
  return stu.name.toUpperCase();
});
console.log(filterUpper);

// ! Ques3: Return only details of those whose age is more than 30

const checkAge = students.filter((stu) => {
  return stu.age > 30;
});
console.log(checkAge);

// ! Ques4: Sum of age of all students

const ageSum = students.reduce((acc, curr) => {
  return acc + curr.age;
}, 0);

console.log(ageSum);

// ! Ques5: Return only names of students whose age is more than 30

const name = students
  .filter((stu) => {
    return stu.age > 30;
  })
  .map((stu) => stu.name);

console.log(name);
