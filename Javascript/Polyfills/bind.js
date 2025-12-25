let car={
    brand:'BMW',
    model:'X5',
    year:2024
}

function carSpecs(color, price){
    console.log(`Car specs: ${this.brand} ${this.model} ${this.year} color:${color} price:${price}`)
}

const boundCarSpecs = carSpecs.bind(car, 'Black', 800000);
boundCarSpecs(); // Car specs: BMW X5 2024 color:Black price:800000


Function.prototype.myBind= function(context={}, ...args){
   if(typeof this !=='function'){
      throw new TypeError('not a function');
   }
   context.fn=this;
   return function(...newArgs){      // this newArgs is for this args bindSpecs('Black', 700000)
      context.fn(...args, ...newArgs);
   }
}


const bindSpecs= carSpecs.myBind(car);
bindSpecs('Black', 700000)
