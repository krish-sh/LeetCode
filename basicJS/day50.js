// Quick Sort

// 5,2,1,4,8,12,9
// p
//         i
//         j

function fPivotIdx(arr, first, last) {
  let pivot = arr[first];
  let i = first + 1;
  let j = last;

  while (i <= j) {
    while ( i <= last &&  arr[i] < pivot  ) {
      i++;
    }
    while (j >= first &&   arr[j] > pivot) {
      j--
    }
    if(i < j){
        swap(arr, i, j)
    }
  }
  swap(arr, j, first)
  return j
}
function quickSort(arr, first, last){
    if(first >= last) return
    let pIndex = fPivotIdx(arr, first, last)
    quickSort(arr, first, pIndex-1)
    quickSort(arr, pIndex+1, last)
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [19, 3, 17, 24, 1, 87, 22]
quickSort(arr, 0, arr.length-1)

console.log(arr);
