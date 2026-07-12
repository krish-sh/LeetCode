let nums = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];

target = 30
let i = 0 
let j = nums.length-1
while(i <= j){
     let k = Math.floor((i+j)/2)
     if(nums[k] === target){
        console.log("Target: ", nums[k], "on Index: ", k);
        break
     }
   if(nums[k] < target){
    i = k + 1
   }else j = k - 1
}
if(i >= j){
    console.log("Element not found!");
    
}


