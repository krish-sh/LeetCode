// Trapping rain water

// let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// let trap = 0;

// let left = new Array(height.length);
// let right = new Array(height.length);
// let maxLeft = height[0];
// let maxRight = height[height.length - 1];
// left[0] = maxLeft;
// right[height.length - 1] = maxRight;

// for (let i = 1; i < height.length; i++) {
//   maxLeft = Math.max(height[i], maxLeft);
//   left[i] = maxLeft;
// }
// for (let j = height.length - 2; j >= 0; j--) {
//   maxRight = Math.max(height[j], maxRight);
//   right[j] = maxRight;
// }
// for(let k = 0; k < height.length; k++){
//     trap += Math.min(left[k], right[k]) - height[k]
// }

// console.log(trap);

// pascal traingle

let nums = 5;

for (let i = 0; i < nums; i++) {
  let row = new Array(i + 1).fill(1)
  for (let j = 1; j < i; j++) {
    row[j] = (row[j - 1] * (i - j + 1)) / j;
  }
  console.log(row);
}
