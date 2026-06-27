let n = 4;

let first = 0;
let second = 1;

if (n > 1) {
  for (let i = 0; i <= n - 2; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
}
return n;
