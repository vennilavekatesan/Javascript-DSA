Array.prototype.myReduce = function (cb, initialVal){
    let accumulator = initialVal;
    for(let i=0; i<this.length; i++){
        accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i];

    }
    return accumulator;
}

// example usage
const arr=[1,2,3,4,5];
const sum = arr.myReduce((acc,cur)=>acc+cur,0);
console.log(sum); // 15

// grouping example
const products = [
    {name: 'apple', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'broccoli', type: 'vegetable'}
];

// using reduce (functional, returns grouped object)
const groupProduct = products.myReduce((acc,product)=>{
    const name =product.name;
    if(!acc[name]){
        acc[name]=[];
    }
    acc[name].push(product)
    return acc;
},{});

console.log(groupProduct);