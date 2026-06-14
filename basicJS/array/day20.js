// Reverse array with extra space

// let revArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   revArr.push(arr[i]);

// }

// console.log(revArr);

// Reverse array with no extra space

// let arr = [1, 2, 3, 4, 5, 6];
// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);

// move all zero on left and 1 in right

// let arr = [0, 1, 0, 1, 0, 1, 1, 0, 0];
// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }

// console.log(arr);

// move all the negative in left order and postive in the right order

let arr = [1, -1, 3, 4, 6, -3, -6, 9, -10, -13];
let i = 0
let j = 0

while(i< arr.length){
    if(arr[i] <= 0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}
console.log(arr);

