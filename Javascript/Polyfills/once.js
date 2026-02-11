function Once(fn, context){
    let ran;
    return function(){
    if(fn){
        ran = fn.apply(context || this, arguments)
        fn=null;
    }
    return ran;
}
}

const hello = Once(()=> console.log('hello'));

hello()
hello()
hello()
hello()