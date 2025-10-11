// Kedan's algorithm , maximum sum of subarray 

const maxSubArray = (arr)=>{
    let max = -Infinity;
    let sum=0;
    let start=0;
    let ansStart=-1;
    let ansEnd=-1;

    for(let i=0; i<arr.length; i++){
        if(sum===0){
            start=i;
        }
        sum+= arr[i];

        if(sum>max){
            max= sum;
            ansStart= start
            ansEnd=i;
        }
        if(sum<0){
            sum=0;
        }
    }

    return {maxSum:max, subAarray: arr.slice(ansStart, ansEnd+1)}

}