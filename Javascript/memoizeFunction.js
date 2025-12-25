// example 
// add = (a,b) => a+b
// memoizedAdd = memoizeFunction(add)
// memoizedAdd(2,3) // computes result and caches it
// memoizedAdd(2,3) // returns cached result

function memoizeFunction(fn){
    const cache = new Map();
    return function (...args){
        const key=JSON.stringify(args);
        if(cache.has(key)){
            console.log('Cache hit for', key);
            return cache.get(key);
        }
        //compute the result and cache it fn(...args) - fn refers to add, sub like that functions
        const result = fn(...args);
        cache.set(key, result);

        return result;
    }

}


const add= (a,b)=> a+b;
const sub= (a,b)=>a-b;
const memoizedAdd = memoizeFunction(add);
console.log(memoizedAdd(2,3)); // computes result and caches it
console.log(memoizedAdd(2,3)); // returns cached result
const memoizedSub = memoizeFunction(sub);
console.log(memoizedSub(5,2)); // computes result and caches it
console.log(memoizedSub(5,2)); // returns cached result
