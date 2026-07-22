// Cyclic Sort
let arr = [4, 8, 7, 2, 1, 6, 5, 3];

let i = 0;
let currentIndex;

while (i < arr.length) {
  currentIndex = arr[i] - 1;
  if (arr[i] === arr[currentIndex]) {
    i++;
  } else {
    [arr[i], arr[currentIndex]] = [arr[currentIndex], arr[i]];
  }
}

console.log(arr);
