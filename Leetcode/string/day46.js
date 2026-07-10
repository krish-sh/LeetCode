let s = "pwwkew";

let max_length = 0
let set = new Set()
let left = 0

for(let right = 0; right<s.length; right++){
    while(set.has(s[right])){
        set.delete(s[left])
        left++
        }

        set.add(s[right])
        max_length = Math.max(max_length, right - left + 1)

}

console.log(max_length);
