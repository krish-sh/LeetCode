// Check if the string is pallandrome or not

// let s = "madam";
// let i = 0;
// let j = s.length - 1;

// let isPallandrome = true;

// while (i < j) {
//   if (s.charAt(i) != s.charAt(j)) {
//     isPallandrome = false;
//   }
//   i++;
//   j--;
// }

// if (isPallandrome) {
//   console.log("Pallandrome");
// } else {
//   console.log("Not Pallandrome");
// }

// Toogle each character

// let s = "ABCDeFj";

// let toggle = "";

// for (let i = 0; i < s.length ; i++) {
//   let ch = s.charCodeAt(i);

//   if (ch >= 65 && ch <= 90) {
//     toggle += s.charAt(i).toLowerCase();
//   } else if (ch >= 97 && ch <= 122) {
//     toggle += s.charAt(i).toUpperCase();
//   }
// }

// console.log(toggle);

//Frequency of each code

let s = "sharma";

let freq = new Array(128).fill(0);

for (let i = 0; i < s.length; i++) {
  let ascii = s.charCodeAt(i);
  freq[ascii] += 1;
}

let visited = new Array(128).fill(false);
for (let i = 0; i < freq.length; i++) {
  let ascii = s.charCodeAt(i);

  if (!visited[ascii]) {
    console.log(s[i] + " appears " + freq[ascii] + " times");
    visited[ascii] = true;
  }
}
