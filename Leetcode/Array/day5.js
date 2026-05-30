// best time to buy and sell stocks in medium level

let prices = [2, 4, 1];

let maxProfit = 0;

let profit;
let i = 0;

for (let j = 1; j < prices.length; j++) {
  if (prices[j] > prices[i]) {
    profit = prices[j] - prices[i];
    maxProfit = profit + maxProfit;
  }
  i = j;
  if (prices[j] < prices[i] || prices[j] === prices[i]) {
    i = j;
  }
}

console.log(maxProfit);
