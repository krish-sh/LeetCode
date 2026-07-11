// power(x,n)

let x = 2.0;
let n = 10;

let ans = 1;
let power = Math.abs(n);

while (power > 0) {
  if (power % 2 === 1) {
    ans *= x;
  }
  x *= x;

  power = Math.floor(power / 2);
}

if (n < 0) ans = 1 / ans;
console.log(ans);