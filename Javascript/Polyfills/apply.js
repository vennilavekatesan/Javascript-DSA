let car={
    brand:'Toyota',
    model:'Camry',
    year:2020
}

function carInfo(city, country){
    console.log(`Car Info: ${this.brand} ${this.model} ${this.year} City:${city} Country:${country}`);
}

carInfo.apply(car, ['Los Angeles', 'USA']); // Car Info: Toyota Camry 2020 City:Los Angeles Country:USA


Function.prototype.myapply= function(context={}, args=[]){
    if(typeof this !=='function'){
        throw new TypeError('Not a function');
    }
    if(!Array.isArray(args)){
        throw new TypeError('CreateListFromArrayLike called on non-object');
    }
    let key = Symbol('fn');
    context[key]=this;
    let result= context[key](...args);
    delete context[key];
    return result;
}


carInfo.myapply(car, ['Los Angeles', 'USA']); // Car Info: Toyota Camry 2020 City:Los Angeles Country:USA