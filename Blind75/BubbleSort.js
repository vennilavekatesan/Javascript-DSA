const BubbleSort=(arr)=>{
    let n= arr.length;
    for(let i=n-1; i>=1; i--){
        for(let j=0; j<=i-1; j++){
            if(arr[j]>arr[j+1]){
                //swap
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

let arr= [64,34,25,12,22,11,90];
console.log(BubbleSort(arr)); // [11,12,22,25,34,64,90]

// time complexity o(n^2)
// space complexity o(1)  because we are not using any extra space