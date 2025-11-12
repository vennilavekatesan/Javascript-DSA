function findFreqOfArray(arr){
    let visited = new Array(arr.length).fill(false);
    let n = arr.length;

    for(let i=0; i<n; i++){
        if(visited[i]===true){
            continue
        }
        let count=1;
        for(let j=i+1; j<n; j++){
            if(arr[i]===arr[j]){
                visited[j]=true;
                count++;
            }
        }
        console.log(`Element ${arr[i]} occurs ${count} times`);
    }
}

// Array: [10, 5, 10, 15, 10, 5]
findFreqOfArray([10, 5, 10, 15, 10, 5]);
// Output:
// Element 10 occurs 3 times
// Element 5 occurs 2 times
// Element 15 occurs 1 times

// time complexity o(n^2)
// space complexity o(n)  because we are using extra space for visited array


// another approach using hashmap

function findFreqUsingMap(arr){
    let freqMap = {};

    for(let i=0; i<arr.length; i++){
        arr[i] = (arr[i] || 0 ) +1;

    }
    
    for(let key in freqMap){
        console.log(`Element ${key} occurs ${freqMap[key]} times`);
    }

}

findFreqUsingMap([10, 5, 10, 15, 10, 5]);
// Output:
// Element 10 occurs 3 times
// Element 5 occurs 2 times
// Element 15 occurs 1 times

// time complexity o(n)
// space complexity o(n)  because we are using extra space for hashmap


