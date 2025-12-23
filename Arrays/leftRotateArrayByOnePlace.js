function leftRotateArrayByOnePlace(arr){
    let n = arr.length;
    let temp = arr[0];
    for(let i=1; i<n; i++){
        arr[i-1]=arr[i];
    }
    arr[n-1] = temp;
    return arr;
}

let arr= [1,2,3,4,5];
console.log(leftRotateArrayByOnePlace(arr)); // [2,3,4,5,1]

// time complexity o(n)
// space complexity o(1)  because we are not using any extra space


function rightRotateArrayByOnePlace(arr2){
    let n=arr2.length;
    let temp=arr2[n-1];
    for(let i=n-1; i>0; i--){

        arr2[i] = arr2[i-1]
    }
    arr2[0]=temp;
    return arr2;
}

let arr2=[1,2,3,4,5];
console.log(rightRotateArrayByOnePlace(arr2)); // [5,1,2,3,4]

// time complexity o(n)
// space complexity o(1)  because we are not using any extra space