let nums = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];

target = 67
let i = 0 
let j = nums.length-1
while(i <= j){
   // let k = Math.floor(i+j)/2  this was only compatible in some languages but 
     let k = Math.floor(i+(j-i)/2) //  this one is used in every language so i prefer this
     if(nums[k] === target){
        console.log("Target: ", nums[k], "on Index: ", k);
        break
     }
   if(nums[k] < target){
    i = k + 1
   }else j = k - 1
}


