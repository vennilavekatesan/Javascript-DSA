let counter=0;
const expensiveFunction=()=>{
    console.log('ExpensiveFunction', counter++);
}


const throttle=(fn, limit)=>{
    let flag=true;
    return function(...args){
        let context =this;
        if(flag){
            fn.apply(context,args);
            flag=false;
            setTimeout(()=>{
              flag=true;
            },limit)
        }
    }
}

const betterFunction2 = throttle(expensiveFunction, 2000);

window.addEventListener('resize',betterFunction2)