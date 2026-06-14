// Calculator
let input;

do {
  input = Number(
    prompt(
      "Press 1 for Addition, 2 for subtraction, 3 for Divisble, 4 for Multiplication"
    )
  );
  if (input === 1) {
    let a = Number(prompt("Take first number"));
    let b = Number(prompt("Take Second number"));
    let sum = a + b;
    console.log("Addition: ", sum);
  } else if (input === 2) {
    let a = Number(prompt("Take first number"));
    let b = Number(prompt("Take Second number"));
    let sum = a - b;
    console.log("Subtraction: ", sum);
  } else if (input === 3) {
    let a = Number(prompt("Take first number"));
    let b = Number(prompt("Take Second number"));
    let sum = a / b;
    console.log("Divisble: ", sum);
  } else if (input === 4) {
    let a = Number(prompt("Take first number"));
    let b = Number(prompt("Take Second number"));
    let sum = a * b;
    console.log("Multiplication: ", sum);
  } else {
    console.log("Not a Correct Number to calculate ");
  }
  let res = prompt(
    "You want to go forther to want to close if close just type close"
  );
  if (res === "close") {
    console.log("close ");
    break;
  }
} while (true);
