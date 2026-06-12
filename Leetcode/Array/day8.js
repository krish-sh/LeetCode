// conatiner with most water

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let i = 0;
let j = height.length - 1;
let max = 0;
while (i < j) {
  max = Math.max(max, Math.min(height[i], height[j]) * (j - i));

  if (height[i] < height[j]) {
    i += 1;
  } else {
    j -= 1;
  }
}

console.log(max);    
