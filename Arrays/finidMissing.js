// Find mussing number in an array

//Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number.

function findMissingNumber(numbers){
    const n = numbers.length;
    const expectedSum = (n*(n+1)/2);
    const actualSum = numbers.reduce((acc,num)=>acc+num,0);
    return expectedSum - actualSum;
}


console.log(findMissingNumber([3,0,1])); // 2
console.log(findMissingNumber([0,1])); // 2
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // 8


// another way using set 
function findMissingNumber2(numbers){
    const numSet = new Set(numbers);
    const n= numbers.length;
    for(let i=0; i<n; i++){
        if(!numSet.has(i)){
            return i;
        }
    }
}

console.log(findMissingNumber2([3,0,1])); // 2
console.log(findMissingNumber2([0,1])); // 2
console.log(findMissingNumber2([9,6,4,2,3,5,7,0,1])); // 8


// time complexity o(n)
// space complexity o(n) for set approach

// another approach xor
function findMissingNumber3(arr){
    let n= arr.length
    let xor1=0; 
    let xor2=0;
    for(let i=0; i<n; i++){
        xor1= xor1 ^ arr[i];
    }
    for(let i=0 ; i<=n; i++){
        xor2=xor2^i;
    }
     
    return xor1 ^ xor2;
}


let arr=[3,0,1];
console.log(findMissingNumber3(arr)); //2
 