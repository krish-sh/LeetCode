// Bubble sort

let arr = [10, 5, 1, 12, 3];
//         j   i

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

//Selective sort

// let min;
// let index = 0;
// for (let i = 0; i < arr.length -1; i++) {
//   min = arr[i];
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j] && min >= arr[j]) {
//       min = arr[j];
//       index = j;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = min;
//   arr[index] = temp;
// }
// console.log(arr);

// Insertion sort

let index;
for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}

console.log(arr);
