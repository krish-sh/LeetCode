// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// Max Number in array

// let arr = [80, 40, 70, 8, 9];
// let max = arr[0]

// for(let i = 1; i< arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max);

// Min

// let arr = [80, 40, 70, 8, 9];
// let min = arr[0]

// for(let i = 1; i< arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// console.log(min);

// 2nd max element

// let arr = [10, 30, 56, 43, 29, 64, 49, 60];
// let max = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max2 = max;
//     max = arr[i];
//   }else if (arr[i] > max2) {
//     max2 = arr[i];
//   }
// }
// console.log(max);
// console.log(max2);

// 2 min

let arr = [80, 40, 70, 8, 9];
let min = Math.min(arr[0], arr[1]);
let min2 = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] < min) {
    min2 = min;
    min = arr[i];
  }else if (arr[i] < min2) {
    min2 = arr[i];
  }
}
console.log(min);
console.log(min2);
