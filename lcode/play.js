const arrin= [3, 8, 2, 5, 10,15];

// const secondLargest = (arr) =>{
// return arr
// }
// console.log(secondLargest(arr))


//find short str

let str = "Hello world"

function strAna(str){
   let hash = {}
    for(let i of str){
        let char = str[i]
        if(hash[char]){
            hash[char] = hash[char] + 1
        }else{
            hash[char] = 0;
        }
    }
    return hash

}

console.log(strAna(str))

