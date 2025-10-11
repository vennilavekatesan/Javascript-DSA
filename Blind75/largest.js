const largestElement = (arr)=>{
    let sortedarr = arr.sort((a,b)=>a-b);
    let n = sortedarr.length;
    return sortedarr[n-1];

}

// time complexity o(n log n ) due to sort
// space complexity o(1)  because we are not using any extra space


console.log(largestElement([3,2,1,5,6,4])); // 6
console.log(largestElement([3,2,3,1,2,4,5,5,6])); // 6

//another approach 

const largestElement2 =(arr)=>{
    let max= arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}


// time complexity o(n)
// space complexity o(1)  because we are not using any extra space

console.log(largestElement2([3,2,1,5,6,4]));
console.log(largestElement2([3,2,3,1,2,4,5,5,6]));