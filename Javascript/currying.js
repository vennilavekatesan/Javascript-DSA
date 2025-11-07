// sum(1)(2)(3)(4)(5)();

// it is called function currying means a function that returns another function untill it reaches the last function 

function sum(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(10)(20)(30)()); // 60
console.log(sum(5)(10)(15)(20)()); // 50
 
// time complexity o(n)
// space complexity o(n) due to call stack. how it is o(n) ?
// because each function call is pushed to the call stack and there are n function calls