let counter=0;
const getData=()=>{
    console.log('fetching Data', counter++);
}

const debounce =(fn, delay)=>{
    let timer;
    return function(...args){
    let context=this;
    clearTimeout(timer)
    timer = setTimeout(()=>{
       fn.apply(context,args);
    },delay)
    }
    
}

const betterFunction = debounce(getData, 300);