const prompt = require("prompt-sync")();
let ans = [];

for (let i =0; i < 5; i++) {
   ans[i] = prompt("Enter the no: ");
  
}

console.log("Array is this:",ans);

