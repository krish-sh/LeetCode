const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6];
const val = 5;

const removeElement = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};


const k = removeElement(nums, val)

console.log(nums.slice(0,k));




