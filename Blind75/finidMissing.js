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