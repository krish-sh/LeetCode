let nums1 = [0, 0];
let nums2 = [0, 0];

let i = 0;
let j = 0;

let m = nums1.length;
let n = nums2.length;

let total = Math.floor((m + n) / 2);
let current = 0;
let prev = 0;
let count = 0;

while (count <= total) {
  if (i < m && (j >= n || nums1[i] < nums2[j])) {
    prev = current;
    current = nums1[i++];
  } else {
    prev = current;

    current = nums2[j++];
  }
  count++;
}

if ((m + n) % 2 === 0) {
  current = (prev + current) / 2;
}

console.log(current);
