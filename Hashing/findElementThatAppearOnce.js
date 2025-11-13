function findElementThatAppearOnce(arr) {
    for(let i=0; i<n; i++){
        let num= arr[i];
        let count=0;
        for(let j=0; j<n; j++){
            if(arr[j]===num){
                count++;
            }

        }
        if(count===1){
            return num;
        }
    }
    return -1;

}


const arr=[4,3,2,4,1,3,2];
console.log(findElementThatAppearOnce(arr)); // [1]

// time complexity o(n^2)
// space complexity o(1)  because we are not using any extra space



// another method using map or hash
function findElementThatAppearOnce2(arr) {
    let map = new Map();
    
    // Step 1: Count frequencies
    for(let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // Step 2: Find element with frequency 1
    for(let [key, value] of map) {
        if(value === 1) {
            return key;
        }
    }
    return -1;
}


// another method using frequency object

function findElementThatAppearOnce3(arr) {
    let freqMap={};
    for(let i=0; i<arr.length;i++){
     freqMap[arr[i]] = (freqMap[arr[i]]||0)+1;
    }

    for(let key of freqMap){
        if(freqMap[key]===1){
            return key;
        }
    }
    return -1;
}


