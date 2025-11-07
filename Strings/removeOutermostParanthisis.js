const removeOutermostParathisis=(str)=>{
     let result='';
     let level=0;

     for(let char of str){
        if(char=='('){
            if(level>1){
                result+=char;
            }
            level++;
        }
        else if(char===')'){
            level--;
            if(level>1){
                result+=char;            }
        }
    }
    return result;
}

