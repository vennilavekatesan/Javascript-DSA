const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dummy Promise Resolved");
    }, 1000);
});

const dummyPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Dummy Promise 2 Resolved");
    }, 2000);
})

const dummyPromise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Dummy Promise 3 Resolved");
    }, 1500);
});

Promise.promiseAllPolyFills=(promises) =>{
    return new Promise((resolve,reject)=>{
        let results=[];
    if(!promises.length){
        resolve(results);
        return;
    }

    let pending = promises.length;
    promises.forEach((promise,idx)=>{
      Promise.resolve(promise).then((res)=>{
         results[idx] = res;
         pending--;
         if(pending===0){
            resolve(results);
         }
      }).catch((res)=>{
        reject(res)
      })
    })
    })
}

Promise.promiseAllPolyFills([dummyPromise,dummyPromise2,dummyPromise3]).then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err))