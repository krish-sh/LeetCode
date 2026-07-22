// Missing value with cycle sort

// let nums = [3, 0, 1];
// let i = 0;

// while (i < nums.length) {
//   let correctIdx = nums[i];
//   if (nums[i] < nums.length && nums[i] != nums[correctIdx]) {
//     [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
//   } else {
//     i++;
//   }
// }
// for (let j = 0; j <= nums.length; j++) {
//   if (j != nums[j]) {
//     console.log(j);
//     return;
//   }
// }
// console.log(nums.length);

// With Sum formula

let nums = [3, 0, 1];

let n = nums.length;
let expectedNumber = (n * (n + 1)) / 2;
let actualTotal = 0;

for (let i = 0; i < nums.length; i++) {
  actualTotal += nums[i];
}

let missingNumber = expectedNumber - actualTotal;
console.log(missingNumber);
