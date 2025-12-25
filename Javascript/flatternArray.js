function flatternArray(arr, flatternArr=[]){
    if(!Array.isArray(arr)) return flatternArr; 
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flatternArray(arr[i], flatternArr);
        }
        else{
            flatternArr.push(arr[i]);
        }
    }
    return flatternArr;
}

let arr1=[1,2,3, {test:"hello"}, [4,5,[6,7]]];
console.log(flatternArray(arr1)); // [1,2,3, {test:"hello"}, 4,5,6,7]

// explain the above code
// The above code defines a function called flatternArray that takes an array as input and returns a flattened version of that array.
// It uses recursion to handle nested arrays and pushes non-array elements into a new array.