// QN - we need to create a first Promsie that resolve with the text called 'First' and create a second promise that will resolve the first promise

const firstPromise = new Promise((resolve, reject)=>{
    resolve('First');
})

const secondPromise = new Promise((resolve, reject)=>{
    resolve(firstPromise);
})

secondPromise.then((res)=>{
    return res;
}).then((res)=>{
    console.log(res);
})

// output
/**
 * First
 */