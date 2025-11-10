function sumOfNumbers(i,sum){
    //base case
    if(i<1){
        return sum;
    }
    return sumOfNumbers(i-1, sum+i);
}

console.log(sumOfNumbers(5,0)); // 15
console.log(sumOfNumbers(10,0)); // 55

// time complexity o(n)
// space complexity o(n)  because of recursive call stack

// the above is parameterized recursion where we are passing sum as a parameter to the function itself

// we can also do it using functional recursion

function sumOfNumbersFunctional(n){
    //base case
    if(n===0){
        return 0;
    }
    return n + sumOfNumbersFunctional(n-1);
}

console.log(sumOfNumbersFunctional(5)); // 15
console.log(sumOfNumbersFunctional(10)); // 55

// time complexity o(n)
// space complexity o(n)  because of recursive call stack
