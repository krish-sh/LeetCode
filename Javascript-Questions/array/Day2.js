const nums = [1, 2, 3, 4, 5, 6];
const target = 9;

const TwoSum = function (nums,target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(TwoSum(nums, target));

