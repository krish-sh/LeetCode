// Remove duplicate items form a array

// let nums = [0, 0, 1, 1, 2, 2, 3, 3, 4];

// let j = 1;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] != nums[i + 1]) {
//     nums[j] = nums[i + 1];
//     j++;
//   }
// }
// console.log(nums);

// merge sorted array

// let arr = [2, 5, 6,8];
// let arr1 = [1, 3, 4, 7,9];
// let temp = new Array(arr.length + arr1.length);
// let k = 0;
// let i = 0;
// let j = 0;

// while (i < arr.length || j < arr1.length) {
//   if (arr[i] < arr1[j]) {
//     temp[k++] = arr[i++];
//   } else {
//     temp[k++] = arr1[j++];
//   }
// }

// while (j < arr1.length) {
//   temp[k++] = arr1[j++];
// }
// while (i < arr.length) {
//   temp[k++] = arr[i++];
// }

// console.log(temp);

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

let i = m - 1;
let j = n - 1;
let k = m + n - 1;

while (j >= 0) {
  if (nums1[i] < nums2[j]) {
    nums1[k--] = nums2[j--];
  } else {
    nums1[k--] = nums1[i--];
  }
}

console.log(nums1);
