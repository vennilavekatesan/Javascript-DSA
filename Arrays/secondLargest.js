function secondLargest(arr) {
    let large = -Infinity;
    let secondLarge = -Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>large){
            secondLarge = large;
            large = arr[i];
        }
        else if(arr[i]>secondLarge && arr[i]!==large){
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}

console.log(secondLargest([10,5,8,12,15])); // 12
console.log(secondLargest([5,5,5])); // -Infinity

// time complexity o(n)
// space complexity o(1)  because we are not using any extra space