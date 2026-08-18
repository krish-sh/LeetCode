// Print name n times

let name = "Krish"

function Name(no, name){
    if(no === 0) return
    console.log(name)
    Name(no - 1, name)
}

Name(5, name)