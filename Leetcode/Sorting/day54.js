// Search in rotated sorted array
nums = [5, 1, 3];

let i = 0;
let j = nums.length - 1;
let target = 5;
let find = false;

while (i <= j) {
  mid = Math.floor(i + (j - i) / 2);

  if (nums[mid] === target) {
    console.log(nums[mid], "on index", mid);
    find = true;
    break;
  }

  if (nums[i] <= nums[mid]) {
    if (target >= nums[i] && target <= nums[mid]) {
      j = mid;
      
    } else {
      i = mid + 1;
    }
  } else {
    if (target >= nums[mid + 1] && target <= nums[j]) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
}
if (find === false) {
  console.log("not find ", -1);
}
