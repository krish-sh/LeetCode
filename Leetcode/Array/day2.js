// convert sorted array to binary search tree

let nums = [-10, -3, 0, 5, 9];

  function TreeNode(val, left,right){
    this.val  = val
    this.left = left || null
    this.right = right || null
}

function Build(start, end) {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);

  let root = new TreeNode(nums[mid]);

  root.left = Build(start, mid - 1);
  root.right = Build(mid + 1, end);
  return root
}
let ans =    Build(0, nums.length - 1);
console.log(ans);


