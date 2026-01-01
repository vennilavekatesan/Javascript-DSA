const removeOuterParentheses=(s)=>{
    let result='';
    let level=0;
    for(let char of s){
        if(char==='('){
            if(level>0){
                result+=char;
            }
            level++;
        }
        else if(char===')'){
           level--;
           if(level>0){
            result+=char;
           }
        }
        
    }
    return result;
}

let str = '()(()())(())';
console.log('Input: ' + str);

console.log(removeOuterParentheses(str));
console.log('Expected:'+ '()()()')


