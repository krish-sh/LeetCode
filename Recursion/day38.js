// function
// n time hello world print

// function temp(n) {
//   if (n === 0) return;
//   console.log("hello world");
//   temp(n - 1)
// }

// temp(5)

// Return numbers in desecending order

// function no(n) {
//   if (n === 0) return;

//   console.log(n);
//   no(n - 1);
// }

// no(5);

//Returning the numbers in ascending order

function no(n) {
  if (n === 0) return;
  no(n - 1);
  console.log(n);
}

no(10);
