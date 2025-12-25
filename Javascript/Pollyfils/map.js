Array.prototype.myMap = function(cb){
    const result=[];
    for(let i=0; i<this.length; i++){
        result.push(cb(this[i], i, this));
    }
    return result;
}

// example usage
const arr=[1,2,3,4,5];
const mappedArr = arr.myMap((num)=>num*2)
console.log(mappedArr); // [2,4,6,8,10]
