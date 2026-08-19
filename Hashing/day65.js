// Number Hashing

// let arr = [1,2,1,2,1,4]
// let max = Math.max(...arr)

// let newArr = new Array(max+1).fill(0)

// for(let i = 0; i< arr.length; i++){
//     let j = arr[i]
//     newArr[j] += 1
// }
// console.log(newArr[4]);

// char Hashing

// let char = ["a","b","d","f","a", "f", "f"]
// let max = 0

// let str = new Array(26).fill(0)

// for(let i =0; i<char.length; i++){
//     let no =  char[i].charCodeAt(0) 
//     let n = no - "a".charCodeAt()
//     str[n] += 1    
// }
// console.log(str);


//Hash using map

let arr = [1,2,3,6,3,3,2,6]

let map = new Map()

for(let i = 0; i < arr.length; i++){
    map.set(arr[i], (map.get(arr[i]) || 0) +1)
}
console.log(map);


