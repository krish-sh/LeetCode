// const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6];
// const val = 5;

// const removeElement = (nums, val) => {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }

//   return i;
// };

// const k = removeElement(nums, val);

// console.log(nums.slice(0,k));

// Binary Search

const nums = [1, 4, 6, 9, 12, 15, 18];
const target = 11;

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

const index = binarySearch(nums, target);
console.log(index);
