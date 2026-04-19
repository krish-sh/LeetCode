const word1 = "krish";
const word2 = "sharma";

const mergeString = function (word1, word2) {
  let result = "";
  let maxSize = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxSize; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
};
console.log(mergeString(word1, word2));
