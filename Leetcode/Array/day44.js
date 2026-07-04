// 3 Sum i!=j i!=k j!=k and i+j+k=0

nums = [-1, 0, 1, 2, -1, -4];

//n3 steps

// let no = [];

// for (let i = 0; i < nums.length - 2; i++) {
//   for (let j = i + 1; j < nums.length - 1; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       if (nums[i] + nums[j] + nums[k] === 0) {
//         no.push([nums[i], nums[j], nums[k]]);
//       }
//     }
//   }
// }

// console.log(no);

//n2 steps

nums.sort((a, b) => a - b);
let ans = [];

for (let i = 0; i < nums.length - 2; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) continue;
  if(nums[i] > 0) break

  left = i + 1;
  right = nums.length - 1;

  while (left < right) {
    let sum = nums[i] + nums[left] + nums[right];

    if (sum === 0) {
      ans.push([nums[i], nums[left], nums[right]]);

      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;

      left++;
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(ans);
