function leftRotateArrayByDPlaces(arr, d) {
      let n= arr.length;
      d=d%n;
      let temp=[];
      for(let i=0; i<d; i++){
        temp[i]=arr[i]
      }

      //shifting
      for(let i=d; i<n; i++){
        arr[i-d] =arr[i];
      }

      //push back temp to array 
      for(let i=n-d;i<n; i++){
        arr[i]= temp[i-(n-d)]
      }
    return arr;
}


let arr=[1,2,3,4,5,6,7];
let d=2;
console.log(leftRotateArrayByDPlaces(arr, d)); // [3,4,5,6,7,1,2]


// time complexity - o(d)+o(n-d)+o(d)=>o(n+d)
// space complexity - o(d)  because we are using extra space of size d

//optimal solution - reversal algorithm

function leftRotateArrayByDPlaces(arr1, d1){
    let n = arr1.length;
    d1 = d1 % n;
    reverseArray(arr1, 0, d1-1);
    reverseArray(arr1, d1, n-1);
    reverseArray(arr1, 0, n-1);
    return arr1;
}

function reverseArray(arr1, start, end){
    while(start < end){
        let temp = arr1[start];
        arr1[start] = arr1[end];
        arr1[end] = temp;
        start++;
        end--;
    }
}


let arr1 = [1,2,3,4,5,6,7];
let d1 = 2;
console.log(leftRotateArrayByDPlaces(arr1, d1)); // [3,4,5,6,7,1,2]

// dry run
//n=7,d=2;
//step 1: reverse first d elements => [2,1]
//reverseArray(arr1,0,1)=>
    //temp=arr1[0]=1;
    //arr1[0] = arr1[1] = 1=2
    //arr1[1] = temp = 1


// time complexity - o(n)
// space complexity - o(1)  because we are not using any extra space