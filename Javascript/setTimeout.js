// create a function it will print 1-5 after 1s

const printNumbers=()=>{
    for(var i=1; i<=5; i++){
        setTimeout(()=>{
            console.log(i)
        }, i*1000)
    }
}

printNumbers(); 
// it will print 6 
// because  of closure and setTimeout 

// to solve this issue we can use let instead of var 
// another approach is you can use closure


const printNumbers2 =()=>{
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(()=>{
                console.log(i)
            }, i*1000)
        }
        close(i);
    }
}

printNumbers2(); 
// it will print 1 2 3 4 5 after 1s

// time complexity o(1)
// space complexity o(1)

