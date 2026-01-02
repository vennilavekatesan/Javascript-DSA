

let car={
    brand:'Toyota',
    model:'Camry',
    year:2020
}

function carDetails(color,price){
    console.log(`Car Details: ${this.brand} ${this.model} ${this.year} Color: ${color} Price: ${price}`);
}

Function.prototype.myCall= function(context={}, ...args){
     if(typeof this !== 'function'){
        throw new TypeError('Not a function');
     }
     let key= Symbol('fn');
     context[key]=this;
     const result= context[key](...args);
     delete context[key];
     return result;
}

carDetails.myCall(car, 'Red', 300000); // Car Details: Toyota Camry 2020 Color: Red Price: 300000