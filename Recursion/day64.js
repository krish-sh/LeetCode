// Print name n times

// let name = "Krish"

// function Name(no, name){
//     if(no === 0) return
//     console.log(name)
//     Name(no - 1, name)
// }

// Name(5, name)

// Print 1 to N

// let no = 1
// function Print(no){
//     if(no > 5) return
//     console.log(no);
//     return Print(no+1)
// }
// Print(no)

// Print N to 1

// function Print(no) {
//   if (no <= 0) return;
//   console.log(no);
//   Print(no - 1);
// }
// Print(5);

// use Backtraking to print 1 to N

// let n = 5
// let i = 1

// function Print(n, i){
//     if(n < i) return

//     Print(n-1, i)
//     console.log(n);

// }
// Print(n,i)

// Dont Use N-1 to print N to 1

// n = 5;
// i = 1;

// function Print(i, n) {
//   if (i > n) return;

//   Print(i + 1, n);
//   console.log(i);
// }

// Print(i, n);

// Sum of N numbers

// function Sum(i,n,sum){
//     if(i >n) return sum
//     sum += i;
//    return Sum(i + 1, n,sum )
// }
// console.log(Sum(1,5,0));

// factorial of a number

// function factorial(n, value){
//     if(n === 1) return value
//     value *= n
    
//     return factorial(n-1, value)
// }
// console.log(factorial(5, 1));

// reverse the array

let arr = [1,2,3,4,5,3]

function reverse(arr,i, j){
    if(i  >= j) return arr
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return reverse(arr,i+1, j-1)let arr = [1,2,3,4,5,3]

function reverse(arr,i, j){
    if(i  >= j) return arr
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return reverse(arr,i+1, j-1)
} 
console.log(reverse(arr, 0, arr.length - 1));

} 
console.log(reverse(arr, 0, arr.length - 1));


