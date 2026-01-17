// what is the output

function job(){
    return new Promise(function(resolve,reject){
        reject();
    })
}

let promise = job();

promise.then(function(){
    console.log('Succes1');
}).then(function(){
    console.log('Success2');
}).then(function(){
    console.log('success3');
}).catch(function(){
   console.log('Error1')
}).then(function(){
    console.log('success4');
})


//output
//Error1
//Success4
