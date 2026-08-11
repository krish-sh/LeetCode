// Koko eating banaanas

let piles = [30, 11, 23, 4,20];
let h = 5;
let first = 1;
let last = 0;
let ans = -1;


for (let i = 0; i < piles.length; i++) {
  last = Math.max(piles[i], last);
}

while (first <= last) {
  let k = 0;
  let mid = Math.floor((first + last) / 2);

  for (let i = 0; i < piles.length; i++) {
    k += Math.ceil(piles[i] / mid);
  }

  if (k > h) {
    first = mid + 1;
  } else {
    ans = mid;
    last = mid - 1;
  }
}

console.log(ans);
