let str = "A man, a plan, a canal: Panama";
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

function revStr(i, j, newStr) {
  if (i >= j) return console.log("Its a Palindrome");
  if (newStr[i] === newStr[j]) {
    return revStr(i + 1, j - 1, newStr);
  } else {
    console.log("Its not a Palindrome");
  }
}

revStr(0, newStr.length-1, newStr);
