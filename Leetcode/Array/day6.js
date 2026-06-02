//colour sort
//
let nums = [2, 0, 1];
//          j              k
//          i

let i = 0;
let j = 0;
let k = nums.length - 1;
let temp;

while (i <= k) {
  if (nums[i] === 0) {
    temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    j++;
    i++;
  } else if (nums[i] === 2) {
    temp = nums[k];
    nums[k] = nums[i];
    nums[i] = temp;
    k--;
  } else {
    i++;
  }
}

console.log(nums);
