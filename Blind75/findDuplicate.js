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