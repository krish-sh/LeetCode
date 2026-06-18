// factorial of each digit in a string and sum of those factorials
let no = "150";
let sum = 0;

let i = 0;
while (i < no.length) {
  let digit = Number(no.charAt(i));

  let fact = 1;
  for (let j = 1; j <= digit; j++) {
    fact *= j;
  }
  sum += fact;
  i++;
}
console.log(sum);
