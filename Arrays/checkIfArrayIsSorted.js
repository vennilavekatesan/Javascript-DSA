function checkIfArrayIsSorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}

console.log(checkIfArrayIsSorted([1,2,3,4,5])); // true
console.log(checkIfArrayIsSorted([5,3,4,1,2])); // false

// time complexity o(n)
// space complexity o(1)  because we are not using any extra space