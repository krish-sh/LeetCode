let nums = [4,5,6,0,0,0,0,2,0,3,0,5,6,0]

let left  = 0
let right = 1

while(right < nums.length){
   if(nums[left] != 0){
    left++
    if(left >= right) right = left+1
   }

    else if(nums[right] === 0){
        right++
    }
    else if(nums[left] === 0){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        right++
        left++
    }
       

}

console.log(nums);
