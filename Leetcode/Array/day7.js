// max subarray sum

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxSum = -Infinity;
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
//   maxSum = Math.max(maxSum, sum);

//   if (sum < 0) {
//     sum = 0;
//   }
// }
// console.log(maxSum);

// Majority Element

let nums = [3, 3, 4];

let currentAns = nums[0];
let count = 1;

for (let i = 1; i < nums.length; i++) {
  if (count == 0) {
    currentAns = nums[i];
    count = 1;
  } else if (currentAns == nums[i]) {
    count++;
  } else count--;
}

console.log(currentAns);
