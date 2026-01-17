function sayHi(){
    return new Promise((resolve, reject)=>{
        resolve('Hi');
    });
}

function greet(message){
    return new Promise((resolve, reject)=>{
        resolve(message + ', How are you?');
    })
}

function askName(greeting){
    return new Promise((resolve, reject)=>{
        resolve(greeting + ' What is your name?');
    })
}

function recursivePromise(promises){
    if(promises.length === 0){
        return;
    }
    const currentPromise = promise.shift(); // it will remove the first promise from the array
    currentPromise.then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
    recursivePromise(promises); // recursive call
}

recursivePromise([
    sayHi(),
    greet('Hello'),
    askName('Hello, How are you?')
])