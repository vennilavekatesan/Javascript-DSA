// what is prototype in JS?
/*
 In JavaScript everything is an object except for the primitive data types 
 So all the objects in JS have a special hidden property called prototype
  which is used to add methods and properties to objects.
    Main thing is protype is itself an object.
    Every object in JS has a prototype property which points to another object.
    When we try to access a property or method of an object, JS first looks for it in the object itself.
    If it doesn't find it there, it looks for it in the prototype of the object.
    This process continues until it finds the property/method or reaches the end of the prototype chain (null).
 */


const parent = {
  greet() {
    return "Hello from parent";
  }
};

const child = {
  name: "Yuva"
};

// set prototype
child.__proto__ = parent;

console.log(child.greet()); // "Hello from parent"

// what happens when we call
// child.greet()
// → not found on child
// → found on parent (prototype)

//another example 
// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();
//Since this refers to rabbit, JS creates:
//rabbit.isSleeping = true; so this belongs to the calling objects. so rabbit object


alert(rabbit.isSleeping); // true - so here this is rabbit object
alert(animal.isSleeping); // undefined (no such property in the prototype)


/*
Methods are shared via prototype,
but properties created using this belong to the calling object.
*/ 
