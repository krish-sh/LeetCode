// Check Armstrong value
let n = 371;
let sum = 0;
let No = n.toString();

while (n > 0) {
  let digit = n % 10;
  sum += Math.pow(digit, No.length);
  n = Math.floor(n / 10);
}
if (sum === Number(No)) {
  console.log("its armstrong NO ");
} else {
  console.log("its not armstrong NO ");
}
