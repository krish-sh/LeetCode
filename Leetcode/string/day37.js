// Roman to integer

let s = "MCMXCIV";
//        i
let map = {
  V: 5,
  I: 1,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let ans = 0;

for (let i = 0; i < s.length; i++) {
  if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
    ans -= map[s[i]];
  } else {
    ans += map[s[i]];
  }
}

console.log(ans);
