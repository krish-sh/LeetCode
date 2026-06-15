//Concatination

let firstName = "Krish";
let lastName = "Sharma";

// console.log(firstName.concat(' ' + lastName));

//trim
// console.log(firstName.trim())

//charAt
// console.log(firstName.charAt(2));

//charCodeAt
// console.log(firstName.charCodeAt(2));

//index of
// console.log(firstName.indexOf("i"));

//lastIndexofSubstring
// console.log(firstName.lastIndexOf('Krish'));

//include
// console.log(firstName.includes('Krish'));

//startsWith
// console.log(firstName.startsWith('K'));

// endsWith
// console.log(firstName.endsWith('h'));

// replace
// console.log(firstName.replace("r", 'k'));

//replaceAll
// console.log(firstName.replaceAll('Krish', 'Mohit'));

//split
// console.log(firstName.split());

// print each char in new line

let string = "Krish";

// for(let i = 0; i < string.length; i++){
//     console.log(string[i]);
// }

//Reverse Order
// let rev = ''
// for(let i = string.length-1; i>=0; i--){
//     rev += string.charAt(i)
// }
// console.log(rev);

// check if the string is palladrom

let s = "madam";
let rev = "";
for (let i = string.length - 1; i >= 0; i--) {
  rev += s.charAt(i);
}
if (s === rev) {
  console.log("pallindrome");
} else {
  console.log("not pallindrome");
}
