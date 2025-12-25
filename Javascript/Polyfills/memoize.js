function memoize(fn){
      const cache = new Map();
      let result;
    return function(...args){
        const key= JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key)
        }
        result=fn(...args)
        cache.set(key,result)
        return result
    }
}

const add=(a,b)=>a+b;
const memoizedAdd = memoize(add);
console.log('not cached values:');
console.log(memoizedAdd(2,3)); // 5, computed
console.log(memoizedAdd(4,5)); // 9, computed

console.log('cached values:');
console.log(memoizedAdd(2,3)); // 5, cached
console.log(memoizedAdd(4,5)); // 9, cached
