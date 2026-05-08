// do while question

// guess the number

const random = Math.floor(Math.random() * 100) + 1;

let attempt = 0;
let guess = 0;

do {
  guess = Number(prompt("Guess a number b/w 1 to 100"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("try again its not a eligible number");
    continue;
  }
  if (guess > random) {
    console.log("its to high");
  } else if (guess < random) {
    console.log("its to low");
  } else {
    console.log("congrats you take the ans🎉", guess);
  }
  attempt++;
} while (guess !== random && attempt <= 5);

