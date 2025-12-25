

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
    context.fn = this; // assign the function to be called as a property of the context object
    context.fn(...args)
    
}

carDetails.myCall(car, 'Red', 300000); // Car Details: Toyota Camry 2020 Color: Red Price: 300000