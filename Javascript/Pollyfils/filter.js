Array.prototype.myFilter = function (cb){
    const result =[];
    for(let i=0; i<this.length; i++){
        if(cb(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}

// example usage
const arr=[1,2,3,4,5,6];
const filteredArr = arr.myFilter((num)=> num%2===0);
console.log(filteredArr); // [2,4,6]