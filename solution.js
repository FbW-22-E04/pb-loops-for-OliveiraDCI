console.log("=========");
console.log("=== 1 ===");
console.log("=========");
// 1
let numArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  sum += numArr[i];
}
console.log(sum);

console.log("=========");
console.log("=== 2 ===");
console.log("=========");
// 2
let bottles = 0;
let max = 5;
for (let i = 1; i <= max; i++) {
  bottles += bottles[i];
  i == 1
    ? console.log(`There is 1 bottle of beer on the table.`)
    : console.log(`There are ${i} bottles of beer on the table.`);
}

console.log("=========");
console.log("=== 3 ===");
console.log("=========");
// 3
let counterStart = 0;
for (let i = 0; i <= 20; i++) {
  counterStart += counterStart[i];
  i % 2 == 1 ? console.log(`${i} is odd`) : console.log(`${i} is even`);
}

console.log("=========");
console.log("=== 4 ===");
console.log("=========");
// 4
let start = 0;
for (let i = 1; i <= 10; i++) {
  start += start[i];

  //   console.log("---first part of question, current iteration times nine:");
  console.log(`${i} * 9 = ${i * 9}. Multiplication table of ${i}`);

  //   console.log("---bonus part of question, nested loop:");
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`${i} * ${rep} = ${i * rep}`);
  }
}

console.log("=========");
console.log("=== 5 ===");
console.log("=========");
// 5
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 == 0 && i % 5 != 0) {
    console.log(i + " Buzz");
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log(i + " Fizz");
  } else {
    console.log(i);
  }
}

console.log("=========");
console.log("=== 6 ===");
console.log("=========");
// 6
let totalSum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    totalSum += i;
  }
}
console.log(totalSum);

console.log("=========");
console.log("=== 7 ===");
console.log("=========");
// 7 - BONUS
for (let i = 1; i <= 1000; i++) {
  if (String(i).slice(-2) === "00") console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) console.log(i);
}

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

let numList = "";
for (let j = 1; j <= 4; j++) {
  for (let i = 0; i < 3; i++) {
    numList = numList + j + " ";
    // console.log(i);
  }
}
console.log(numList);

let numListTwo = "";
for (let j = 0; j < 3; j++) {
  for (let i = 0; i <= 4; i++) {
    numListTwo = numListTwo + i + " ";
  }
}
console.log(numListTwo);

console.log("=========");
console.log("=== 8 ===");
console.log("=========");
// 8
let isPalindrome = "lol";
let isPalindromeReverse = isPalindrome.split("").reverse().join("");
let comparison = isPalindrome === isPalindromeReverse ? "true" : "false";
console.log(comparison);
