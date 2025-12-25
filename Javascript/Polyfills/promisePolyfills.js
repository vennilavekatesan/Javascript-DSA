function polyfillPromise(executor){
    let onResolve;
    let onReject;
    let isFullfilled =false;
    let isRejected = false;
    let isCalled = false;
    let value;
    
   function resolve(val){
    isFullfilled=true;
    value=val;
    if(typeof onResolve ==='function'){
        onResolve(val);
        isCalled = true;
    }
    
   }

   function reject(val){
    isRejected=true;
    value=val;
    if(typeof onReject ==='function'){
        onReject(val);
        isCalled = true;
    }
   }

    this.then = function(callback){
        onResolve = callback;
        if(isFullfilled && !isCalled){
            onResolve(value);
            isCalled = true;
        }
        return this;
    }

    this.catch = function(callback){
        onReject = callback;
        if(isRejected){
            onReject(value);
        }
        return this;
    }
    executor(resolve,reject);

}




const examplePromise = new polyfillPromise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve(2);
    // },1000);
    resolve(2);
})

examplePromise.then((res)=>{
    console.log(res); // 2
}).catch((err)=>{
    console.log(err);
})