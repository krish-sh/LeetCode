// 3Sum Closest

let nums = [1, 1, 1, 0];
let target = -100;

nums.sort((a, b) => a - b);

let closet = nums[0] + nums[1] + nums[2];
for (let i = 0; i < nums.length - 2; i++) {
  let k = i + 1;
  let j = nums.length - 1;

  while (k < j) {
    let sum = nums[i] + nums[k ] + nums[j];
    let diff = Math.abs(sum - target);
    let closetDiff = Math.abs(closet - target);
    if (diff < closetDiff) {
      closet = sum;
    }

    if (sum < target) {
      k++;
    } else if (sum > target) {
      j--;
    } else {
      console.log(closet);
      break;
    }
  }
}
console.log(closet);
