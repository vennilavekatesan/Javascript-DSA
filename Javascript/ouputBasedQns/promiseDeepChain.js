// what is the output

function job(state){
    return new Promise(function(resolve,reject){
        if(state){
            resolve('success')
        }
        else{
            reject('error');
        }
    })
}

let promise = job(true);

promise
.then(function(data){
    console.log(data);
    return job(true);
}).then(function(data){
    if(data!=='victory'){
        throw 'Defeat'
    }
   return job(true);
}).then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);  // Defeat
    return job(false)
}).then(function(data){
    console.log(data);
    return job(true);
}).catch(function(error){
   console.log(error);
   return 'Error caught';
}).then(function(data){
    console.log(data);
    return new Error('test');
}).then(function(data){
    console.log('success:', data.message);
}).catch(function(data){
    console.log('error:', data.message);
})

//output
/**
 * success
 * Defeat
 * error
 * Error caught
 * success:test
 * 
 */