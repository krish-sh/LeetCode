// best time to buy and sell stocks

let prices = [7, 6, 4, 3, 1];
let min = prices[0];
let maxProfit = 0;
let profit;

for (let i = 0; i < prices.length; i++) {
  if (prices[i] < min) {
    min = prices[i];
  }

  profit = prices[i] - min;
  maxProfit = Math.max(maxProfit, profit);
}

console.log(maxProfit);
