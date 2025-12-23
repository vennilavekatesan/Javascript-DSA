function rightRotateArrayByDplaces(arr,d){
    let n=arr.length;
    d=d%n;
    let temp=[];
    //store last d elements in temp
    for(let i=0; i<d; i++){
        temp[i]= arr[n-d+i];

    }

    //shifting
    for(let i=n-d-1; i>=0; i--){
        arr[i+d]=arr[i]
    }
    //push back temp to array
    for(let i=0; i<d; i++){
        arr[i]=temp[i];
    }
    return arr;
}

let arr=[1,2,3,4,5,6,7];
let d=2;
console.log(rightRotateArrayByDplaces(arr,d)); // [6,7,1,2,3,4,5]


// another approach - reversal algorithm

function rightRotateArrayByDplaces(arr1, d1){
    let n= arr1.length;
    d1=d1%n;
    reverseArray(arr1, n-d1, n-1);
    reverseArray(arr1, 0, n-d1-1);
    reverseArray(arr1, 0, n-1);
    return arr1;
}

function reverseArray(arr1, start, end){
    while(start<end){
        let temp= arr1[start];
        arr1[start]= arr1[end];
        arr1[end]= temp;
        start++;
        end--;
    }
}

let arr1=[1,2,3,4,5,6,7];
let d1=2;
console.log(rightRotateArrayByDplaces(arr1,d1)); // [6,7,1,2,3,4,5]