// buy and sell stock

let price = [7, 1, 5, 3, 6, 4];

let min = price[0];
let max = 0;
let profit;

for (let i = 1; i < price.length; i++) {
  if (price[i] < min) {
    min = price[i];
  }
  profit = price[i] - min;
  max = Math.max(max, profit);
}
console.log(max);
