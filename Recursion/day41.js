// let n = 10;
// process.stdout.write(0 + " " + 1 + " ");
// function itreate(n, first, second) {
//   if (n == 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   itreate(n - 1, second, third);
// }
// itreate(n - 2, 0, 1);
// Sum of nth fibinnaco with  recursion

// let n = 5;
// let first = 0;
// let second = 1;

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += second;
//   let third = first + second;
//   first = second;
//   second = third;
// }
// console.log(sum);

function iterate(n) {
  if (n == 0 || n == 1) return n;

  return iterate(n - 1) + iterate(n - 2);
}

let n = 4;

console.log(iterate(n));
