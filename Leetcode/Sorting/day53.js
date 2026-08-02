// Find all disappeared numbers in an array
nums = [4, 3, 2, 7, 8, 2, 3, 1];
let i = 0;
let disappeardeNo = new Array();

while (i < nums.length) {
  let ci = nums[i] - 1;

  if (nums[i] != nums[ci]) {
    [nums[i], nums[ci]] = [nums[ci], nums[i]];
  } else {
    i++;
  }
}

for (let j = 0; j < nums.length; j++) {
  if (j + 1 != nums[j]) {
    disappeardeNo.push(j + 1);
  }
}

console.log(disappeardeNo);
