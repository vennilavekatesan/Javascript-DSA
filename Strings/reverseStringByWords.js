const reverseStringByWords=(str)=>{
    let stack=[];
     let words = str.trim().split(/\s+/);
     for(let word of words){
        stack.push(word);
     }

     let result='';
     while(stack.length>0){
        result+= stack.pop();
        if(stack.length>0){
            result+=' '
        }
     }
    return result;
}