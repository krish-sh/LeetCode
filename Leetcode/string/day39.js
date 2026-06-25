// Find the index of first occurence of substring

let heystack = "aaaaa";
//              i
let needle = "bba";
//j           j
//j           0

let found = false;

for (let i = 0; i < heystack.length; i++) {
  if (heystack[i] === needle[0]) {
    found = true;
    for (let j = 0; j < needle.length; j++) {
      if (heystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
      if (j === needle.length - 1) {
        found = true;
        console.log(i);
        break;
      }
    }
  }
}
if (!found) {
  console.log(-1);
  
}
