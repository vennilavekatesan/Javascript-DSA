const insertionSort = (arr) => {
    let n= arr.length;
    for(let i=0; i<=n-1; i++){
    let j=i;
    while(j>0 && arr[j-1]>arr[j]){
        //swap
        [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
        j--;
    }
}
   return arr;
}


let arr= [12,11,13,5,6];
console.log(insertionSort(arr)); // [5,6,11,12,13]

// time complexity o(n^2)
// space complexity o(1)  because we are not using any extra space