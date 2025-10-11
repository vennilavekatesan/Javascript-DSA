function hasDuplicate(numbers){
    let numset = new Set();
    for( num of numbers){
        if(numset.has(num)){
            return true;
        }
        numset.add(num);
    }
    return false;
}


console.log(hasDuplicate([1,2,3,1])); // true
console.log(hasDuplicate([1,2,3,4])); // false
console.log(hasDuplicate([1,1,1,3,3,4,3,2,4,2])); // true


//time complexity O(n)
//space complexity O(n)


//another approach to use sort
function hasDuplicate2(numbers){
    numbers.sort((a,b)=>a-b);
    for(let i=0; i<numbers.length-1; i++){
        if(numbers[i]===numbers[i+1]){
            return true;
        }
    }
    return false;
}


console.log(hasDuplicate2([1,2,3,1])); // true
console.log(hasDuplicate2([1,2,3,4])); // false
console.log(hasDuplicate2([1,1,1,3,3,4,3,2,4,2])); // true