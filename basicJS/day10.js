let number = 5234;

if (number >= 500) {
  let notes = Math.floor(number / 500);
  let extra = number % 500;
  number = extra;
  console.log("500 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 200 && number < 500) {
  let notes = Math.floor(number / 200);
  let extra = number % 200;
  number = extra;

  console.log("200 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 100 && number < 200) {
  let notes = Math.floor(number / 100);
  let extra = number % 100;
  number = extra;

  console.log("100 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 50 && number < 100) {
  let notes = Math.floor(number / 50);
  let extra = number % 50;
  number = extra;

  console.log("50 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 20 && number < 50) {
  let notes = Math.floor(number / 20);
  let extra = number % 20;
  number = extra;

  console.log("20 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 10 && number < 20) {
  let notes = Math.floor(number / 10);
  let extra = number % 10;
  number = extra;

  console.log("10 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 5 && number < 10) {
  let notes = Math.floor(number / 5);
  let extra = number % 5;
  number = extra;

  console.log("5 notes are:", notes, "and extra notes are:", extra);
}
if (number >= 2 && number < 5) {
  let notes = Math.floor(number / 2);
  let extra = number % 2;
  number = extra;

  console.log("2 coin are:", notes, "and extra notes are:", extra);
}
if (number >= 1 && number < 2) {
  let notes = Math.floor(number / 1);
  let extra = number % 1;
  number = extra;

  console.log("1 coin are:", notes, "and extra notes are:", extra);
}
