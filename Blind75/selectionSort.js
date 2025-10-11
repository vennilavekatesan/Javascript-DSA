const selectionSort =(arr)=>{
    let n= arr.length;
    for(let i=0; i<=n-2; i++){
           let min= i;
        for(let j=i; j<=n-1; j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        //swap
        let temp = arr[min];
        arr[min]=arr[i]
        arr[i]=temp;
    }
    return arr;
}

let arr= [64,25,12,22,11];
let n= arr.length;
console.log(selectionSort(arr)); // [11,12,22,25,64]


// arr= [64,25,12,22,11] => [11,12,22,25,64]