const mergeSort=(arr, low, high)=>{
    if(low===high) return;
    let mid = Math.floor((low+high)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);

    return arr;
}

const merge = (arr, low, mid, high)=>{
    let temp = [];
    let left = low;
    let right= mid+1;
    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left])
            left++;
        }
        else{
            temp.push(arr[right])
            right++;
        }
    }
    // Append any remaining elements from either half
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }
    // Copy the merged elements back into the original array
    
    for(let i = low; i <= high; i++){
        arr[i] = temp[i - low];
    }

}
let arr= [38,27,43,3,9,82,10];
let n= arr.length;
console.log(mergeSort(arr,0,n-1)); // [3,9,10,27,38,43,82]