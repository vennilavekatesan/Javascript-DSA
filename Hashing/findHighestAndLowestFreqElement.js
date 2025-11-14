function findHighestAndLowestFreqElement(arr) {
    let n = arr.length;
    let visited= new Array(n).fill(false);
    let maxFreq=0;
    let minFreq= Infinity;
    let maxEle=null;
    let minEle=null;
    for(let i=0; i<n ; i++){
        if(visited[i]===true){
            continue;
        }
        let count=1;
        for(let j=i+1; j<n; j++){
            if(arr[i]===arr[j]){
                visited[j]=true;
                count++;
            }
        }
      if(count>maxFreq){
        maxEle=arr[i];
        maxFreq=count;
      }
      if(count<minFreq){
        minEle=arr[i];
        minFreq=count;
      }

    }
    return { maxEle, maxFreq, minEle, minFreq };
}

let arr= [10, 5, 10, 15, 10, 5, 20, 15, 20, 20];
console.log(findHighestAndLowestFreqElement(arr));
// Output: { maxEle: 10, maxFreq: 3, minEle: 15, minFreq: 2 }

// time complexity o(n^2)
// space complexity o(n)  because we are using extra space for visited array



// another approach using hashmap

function findHighestAndLowestFreqElementUsingMap(arr){
    let freqMap = {};
    for(let i=0; i<arr.length; i++){
        freqMap[arr[i]] = (freqMap[arr[i]] || 0 ) +1;
    }   
    let maxFreq=0;
    let minFreq= Infinity;
    let maxEle=null;
    let minEle=null;
    for(let key in freqMap){
        if(freqMap[key]>maxFreq){
            maxFreq=freqMap[key];
            maxEle=key;
        }
        if(freqMap[key]<minFreq){
            minFreq=freqMap[key];
            minEle=key;
        }
    }
    return { maxEle, maxFreq, minEle, minFreq };
}

let arr2= [10, 5, 10, 15, 10, 5, 20, 15, 20, 20];
console.log(findHighestAndLowestFreqElementUsingMap(arr2));
// Output: { maxEle: '10', maxFreq: 3, minEle: '15', minFreq: 2 }