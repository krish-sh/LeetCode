// Frequency of an element
let nums = [1, 4, 8, 13];
let k = 5;
let count = 1;

nums.sort((a, b) => a - b);

for (let i = nums.length - 1; i > 0; i--) {
  let newCount = 1;
  let total = 0;
  for (let j = i - 1; j >= 0; j--) {
    let sub = nums[i] - nums[j];
    total += sub;
    if (total <= k) {
      newCount++;
    } else {
      break;
    }
  }
  if (newCount > count) {
    count = newCount;
    newCount = 1;
  }
}
console.log(count);
