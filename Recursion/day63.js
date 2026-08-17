

function count(no){
    if (no >= 10) return 0
    console.log(no);
    return count(no + 1)
}

count(0)