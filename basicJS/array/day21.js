const prompt = require("prompt-sync")();

// left rotation by 1

// let arr = [1,2,3,4,5]
// let temp = arr[0]

// for(let i=0; i<arr.length-1;i++){
//     arr[i] = arr[i+1]

// }
// arr[arr.length -1] = temp

// console.log(arr);

// Right rotation by 1

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = temp;
// console.log(arr);

// left Rotation by k elements

// let arr = [1, 2, 3, 4, 5];

// let k = Number(prompt("Enter  K value:"));

// if (arr[arr.length] === k) {
//   arr[arr.length] = arr;
// } else {
//   for (let j = 0; j < k; j++) {
//     let temp = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = temp;
//   }
// }

// console.log(arr);

// Right roration by k step

let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter K value:"));

if (arr[arr.length-1] === k) {
  arr = arr;
} else {
  for (let i = 0; i < k; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
}
console.log(arr);
