// book allocation problem
let nums = [12,34,67,90];
let k = 2;

let first = 0;
let last = 0;
let ans = -1;

if (k > nums.length) {
  console.log(-1);
}

function isValid(nums, mid, k) {
  let student = 1;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > mid) {
      student++;
      sum = nums[i];
      if (student > k) {
        return false;
      }
    } else {
      sum += nums[i];
    }
  }
  return true;
}

for (let i = 0; i < nums.length; i++) {
  first = Math.max(first, nums[i]);
  last += nums[i];
}

while (first <= last) {
  let mid = Math.floor((first + last) / 2);

  if (isValid(nums, mid, k)) {
    ans = mid;
    last = mid - 1;
  } else {
    first = mid + 1;
  }
}

console.log(ans);
