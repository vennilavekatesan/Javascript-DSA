function maxConsecutiveOnes(arr) {
    let max=0;
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===1){
            count++;
            max= Math.max(max,count);
        }
        else{
            count=0;
        }
    }
    return max;
}


console.log(maxConsecutiveOnes([1,1,0,1,1,1])); //3
console.log(maxConsecutiveOnes([1,0,1,1,0,1])); //2

// time complexity o(n)
// space complexity o(1)  because we are not using any extra space  

// dry run
// arr= [1,1,0,1,1,1]
// i=0, count=1, max=1
// i=1, count=2, max=2
// i=2, count=0, max=2
// i=3, count=1, max=2
// i=4, count=2, max=2
// i=5, count=3, max=3
// return 3